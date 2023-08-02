import * as ts from "typescript";

export default function transform(sourceCode: string): string {
  try {
    const result = ts.transpileModule(sourceCode, {
			compilerOptions: {
				jsx: ts.JsxEmit.Preserve,
				target: ts.ScriptTarget.ESNext,
				importsNotUsedAsValues: ts.ImportsNotUsedAsValues.Preserve
			}
		});

    return result.outputText;
  } catch (error) {
    throw error;
  }
}
