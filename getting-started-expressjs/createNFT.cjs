const { Metaplex, keypairIdentity, mockStorage } = require("@metaplex-foundation/js-next");
const { Connection, clusterApiUrl, Keypair } = require("@solana/web3.js");

const kp = require('./keypair.json');

const arr = Object.values(kp._keypair.secretKey);
const secret = new Uint8Array(arr);
const myKeyPair = Keypair.fromSecretKey(secret);

const connection = new Connection(clusterApiUrl('devnet'));
const metaplex = Metaplex.make(connection)
  .use(keypairIdentity(myKeyPair))
  .use(mockStorage());

let uploadNFT = async () => {

    const { uri } = await metaplex.nfts().uploadMetadata({
        name: 'First NFT',
    });

    const {nft} = await metaplex.nfts().create({
        uri:uri
    });

    console.log(nft.mint.toBase58());
}

uploadNFT();