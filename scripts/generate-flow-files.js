const fs = require('fs-extra')
const path = require('path')

const DIST_DIR = path.join(__dirname, '..', 'dist')

const FLOW_DECLARATION = `// @flow

declare export default function useConstant<T>(fn: () => T): T
`

fs.readdir(DIST_DIR)
  .then(files =>
    Promise.all(
      files.map(file =>
        fs.writeFile(path.join(DIST_DIR, `${file}.flow`), FLOW_DECLARATION),
      ),
    ),
  )
  .catch(err => {
    console.error(`Flow files couldn't be generated, script has thrown this:`)
    console.error(err)
    process.exit(1)
  })
