import { createSignal } from 'solid-js';
import logo from "../assets/logo.png"

const onConnectWallet = () => {

}

const Header = () => {
  
  return (
    <header class="bg-transparent p-4 fixed top-0 left-0 w-full">
      <div class="flex justify-between items-center">
        <a class="flex items-center space-x-2 hover" href="/">
          <img class="w-8 h-8" src={logo.src} alt="Logo" />
          <h1 class="px-4 text-sm font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500  to-blue-500">Titan Container</h1>
        </a>
        <button class="hidden md:block px-4 middle py-2 bg-blue-500 text-white rounded text-xs h-12 hover:bg-op-80" onClick={onConnectWallet}>
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
