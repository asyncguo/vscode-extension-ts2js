import * as swc from '@swc/core'
import * as fs from 'node:fs/promises'

export default async function transform(path: string) {
    try {
        const { code } = await swc.transformFile(
            path,
            {
                jsc: {
                    parser: {
                        syntax: "typescript"
                    },
                    target: 'esnext'
                }
            }
        )

        await fs.writeFile(path, code)
    } catch (error) {
        throw error
    }
}
