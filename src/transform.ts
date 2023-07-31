import * as swc from '@swc/core'

export default async function transform(sourceCode: string): Promise<string> {
	try {
		const { code } = await swc.transform(
			sourceCode,
			{
				jsc: {
					parser: {
						syntax: "typescript"
					},
					target: 'esnext'
				}
			}
		)

		return code
	} catch (error) {
		return Promise.reject(error)
	}
}
