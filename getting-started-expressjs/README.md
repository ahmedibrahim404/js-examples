# Getting Started with Metaplex and Express.js

This example sets up a new express app with Metaplex.
The Express.js app works with only one route that accepts a mint address in the request and returns the NFT object from the SDK as the response.

It requires [Node.js](https://nodejs.org/) to run.
1. **Create a new Node project**

   ```sh
    mkdir getting-started-expressjs
    cd getting-started-expressjs
    npm init -y
   ```
2. **Install the Metaplex and Solana SDKs**
   ```sh
   npm install @metaplex-foundation/js @solana/web3.js
   ```

3. **Create your main script file [`index.cjs`] and copy the source code from [`index.cjs`](./index.cjs)**

4. **Make sure to update `pathToMyKeypair` variable with the path to your keypair**

5. **Run the server**
```sh
node index.cjs
```

6. Open [http://localhost:3000/getNFT?mint=xxx](http://localhost:3000/getNFT?mint=xxx) with your browser after replacing (xxx) with your mint address to return the NFT object.

If you're interested in how this example app is using the Metaplex SDK, check out the [`index.cjs`](./index.cjs).


## Learn More

To learn more about Metaplex JS SDK, take a look at the following resources:
- [Metaplex JS SDK](https://github.com/metaplex-foundation/js).
- [Metaplex JS Examples](https://github.com/metaplex-foundation/js-examples).
