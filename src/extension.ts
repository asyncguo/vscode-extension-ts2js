import * as vscode from 'vscode';
import transform from './transform';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand(
		'vscode-extension-ts2js.ts2js',
		async (uri) => {
			if (uri.path) {
				try {
					await transform(uri.path)
				} catch (error) {
					vscode.window.showErrorMessage((error as string).toString())
				}
			}
		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() { }
