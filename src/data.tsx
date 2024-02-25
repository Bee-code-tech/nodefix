import metamask from "./assets/metamask.png";
import trustwallet from "./assets/trust-wallet-logo.webp";
import coinbase from "./assets/coinbase-coin-logo.png";
import polkadot from "./assets/polkadot-coin-logo-icon.jpg";
import maiar from "./assets/maiar-logo.jpg";
import wallet from "./assets/wallet.png";
import sollet from "./assets/sollet.png";
import solflare from "./assets/solflare.png";
import near from "./assets/near.png";
import shell from "./assets/shell-f8ae42223837aae3358dcc1de881406e.jpg";
import rubic from "./assets/rubic-b6978d64b0197aec38ebf807ea0dfae7.jpg";
import torus from "./assets/torus.jpg";
import terrastation from "./assets/terrastation.png";
import space from "./assets/space-9705cd779cebb6665ca3e9c2f124ef3a.png";
import stablepay from "./assets/stablepay-ad51b20c2c20da6cae8892046a5e4e0e.jpg";
import phantom from "./assets/phantom.png";
import OneInchExchange from "./assets/oneinchexchange-b025e0c5ecfd03b6b40541d3746c5cce.png";
import streamR from "./assets/streamr-cde993547e274bc2a0218d4cfc86c897.jpg";
import yearn from "./assets/yearn-b1f58a23799192b584640e18aa3e49ac.png";
import rcn from "./assets/rcnfinance-10962ac2106e60990ad21d6285bb7761.jpg";
import sushi from "./assets/sushiswap-f86fc0b4ac560941a052507d5129f5f7.png";
import unstop from "./assets/unstoppable-94cacc1f07ef4bd5d209cc54e6947dfc.png";
import xdc from "./assets/xdcnetwork-9a98bff95dffc41869b8e77912a6cc54.png";
import zapper from "./assets/zapper-76f0069b6f2fa3659171cb7fdb79fe70.png";
import zerion from "./assets/zerion-27afc21d7efd4dcf842bc3129536b6a1.png";
import zlot from "./assets/zlot-94acfa2da7de104d5ec9b4f8d443660b.jpg";
import oasis from "./assets/oasis-82605275aeff1ae32572803841dfce09.png";
import ocean from "./assets/oceanprotocol.png";
import open from "./assets/opensea-cd23760a256fec5beeb34bc8fa5bce12.jpg";
import orchid from "./assets/orchid-5723e8a24869107efe2e6168bcf235a3.png";
import mooni from "./assets/mooni-433731ff4a75f50aafcd77bf594bff90.jpg";
import mushroom from "./assets/mushroomfinance-5a5378ebb4d4d876246e8a3954bc032e.jpg";
import mycrypto from "./assets/mycrypto-eb8c1b9bd22f073b54b6b396d11d2d8e.png";
import mintbase from "./assets/mintbase-f55b6301f81c6adc01844d708c1e0781.jpg";
import mesa from "./assets/mesa-8de8a8b02c4ebd53ce6e2a099ee9ab8a.png";
import melon from "./assets/melon-aa48960b1a004eabf05ac598ec791bde.png";
import mc from "./assets/mcdex-1f14e288b5dbd182f6357625720a7680.png";
import matra from "./assets/mantradao-7e2d23dfdbab335b0e99730ff4028970.png";
import mask from "./assets/maskbook-808a88212bc45b95cf21835db9b01b50.png";
import ledger from "./assets/ledger.png";
import kep from "./assets/keplr.png";
import betoken from "./assets/betoken-bb5e247ee3781d4dda52a09f9a48ed04.png";
import lido from "./assets/lido-4fe413d9b23c88bb6973c62da15a03dc.png";
import kyber from "./assets/kyberswap-5eac7ed4173229dde773132e76891e9d.jpg";
import index from "./assets/indexcoop-9c383dd154f6f30145853d7ec3726c4c.jpg";
import iearn from "./assets/iearnfinance-a9c886339dfde18902b4a2d62dd7d8ed.jpg";
import idle from "./assets/idlefinance-80d51872039fc5e44da8471f772e7b8e.png";
import honey from "./assets/honeyswap-352ce745732a31d09400a6ccd72926ac.jpg";
import fleek from "./assets/fleek-866527cf9372053c6f559b0b08f5b50f.png";
import gelato from "./assets/gelato-e9bf46eec4e1f3d70ae07b68c6950fe5.jpg";

interface walletConnect {
  name: string;
  imgUrl: string;
}

export const walletConnect: walletConnect[] = [
  { name: "Trust Wallet", imgUrl: trustwallet },
  { name: "Metamask", imgUrl: metamask },
  { name: "Coinbase", imgUrl: coinbase },
  { name: "Polkadot", imgUrl: polkadot },
  { name: "Maiar", imgUrl: maiar },
  { name: "Wallet", imgUrl: wallet },
  { name: "Sollet", imgUrl: sollet },
  { name: "Solflare", imgUrl: solflare },
  { name: "Near", imgUrl: near },
  { name: "Shell", imgUrl: shell },
  { name: "Rubic", imgUrl: rubic },
  { name: "Torus", imgUrl: torus },
  { name: "TerraStation", imgUrl: terrastation },
  { name: "Space", imgUrl: space },
  { name: "StablePay", imgUrl: stablepay },
  { name: "Phantom", imgUrl: phantom },
  { name: "OneInchExchange", imgUrl: OneInchExchange },
  { name: "StreamR", imgUrl: streamR },
  { name: "Yearn", imgUrl: yearn },
  { name: "RcnFinance", imgUrl: rcn },
  { name: "SushiSwap", imgUrl: sushi },
  { name: "Unstoppable", imgUrl: unstop },
  { name: "XdcNetwork", imgUrl: xdc },
  { name: "Zapper", imgUrl: zapper },
  { name: "Zlot", imgUrl: zlot },
  { name: "Zerion", imgUrl: zerion },
  { name: "Oasis", imgUrl: oasis },
  { name: "OceanProtocol", imgUrl: ocean },
  { name: "OpenSea", imgUrl: open },
  { name: "Orchid", imgUrl: orchid },
  { name: "Mooni", imgUrl: mooni },
  { name: "MyCrypto", imgUrl: mycrypto },
  { name: "Mushroom", imgUrl: mushroom },
  { name: "MintBase", imgUrl: mintbase },
  { name: "Mesa", imgUrl: mesa },
  { name: "Melon", imgUrl: melon },
  { name: "McDex", imgUrl: mc },
  { name: "Matradao", imgUrl: matra },
  { name: "MaskBook", imgUrl: mask },
  { name: "Ledger", imgUrl: ledger },
  { name: "Keplr", imgUrl: kep },
  { name: "BeToken", imgUrl: betoken },
  { name: "KyberSwap", imgUrl: kyber },
  { name: "Lido", imgUrl: lido },
  { name: "IndexCoop", imgUrl: index },
  { name: "IEarnFinance", imgUrl: iearn },
  { name: "IdleFinance", imgUrl: idle },
  { name: "HoneySwap", imgUrl: honey },
  { name: "Fleek", imgUrl: fleek },
  { name: "Gelato", imgUrl: gelato },
];
