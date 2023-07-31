import * as vscode from 'vscode';
import transform from './transform';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand(
		'vscode-extension-ts2js.ts2js',
		async (uri) => {
			try {
				const editor = vscode.window.activeTextEditor

				if (editor) {
					const doc = editor.document
					const jsDoc = await transform(doc.getText())

					editor?.edit(editBuilder => {
						const start = new vscode.Position(0, 0)
						const end = new vscode.Position(doc.lineCount - 1, doc.lineAt(doc.lineCount - 1).text.length)
						const selection = new vscode.Range(start, end)

						editBuilder.replace(selection, jsDoc)
					})
				}
			} catch (error) {
				console.log('error => ', error);
				vscode.window.showErrorMessage((error as string).toString())
			}
		}
	)

	context.subscriptions.push(disposable);
}

export function deactivate() { }
