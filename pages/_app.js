import '../styles/globals.css'
import { ThirdwebWeb3Provider } from'@3rdweb/hooks'

/**
 * Documenting Important Note: The chain ID 4 represents the Rinkeby Network
 * The `Injected` connector is a web3 connection method used by Metamask
 */

const supportedChainIds=[4]
const connectors={
  injected:{},
}

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
