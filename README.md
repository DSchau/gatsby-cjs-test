<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby CommonJS Test
</h1>

## 🚀 Quick start

- Run `yarn` or `npm install` to install dependencies
- Use [gatsby-dev](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-dev-cli) to link to local gatsby with built files
    - Build files in `gatsby`
    - `gatsby-dev --set-path-to-repo <repo-path>`
    - `gatsby-dev --packages gatsby --scan-once --quiet`
- Run `yarn test` or `npm test`
- Observe the passing tests 🎉
➜ yarn test
    ```bash
    yarn run v1.10.1
    $ mocha --recursive "test/**/*.js"


      it can require gatsby
        ✓ has expected exports


      1 passing (6ms)

    ✨  Done in 0.27s.
    ```
