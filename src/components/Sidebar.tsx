import {For} from 'solid-js';
import logo from "../assets/logo.png"
import ThemeToggle from './ThemeToggle';

interface Props {
  isOpen: boolean;
}

export default (props: Props) => {
  const onClose = () => {}
  const onClick = () => {

  }
  const menuList = [
    // {
    //   title: "Home",
    //   icon: "i-carbon-home",
    //   slug: "home",
    // },
    {
      title: "Deployments",
      icon: "i-carbon-deploy",
      slug: "deployment",
    },
    {
      title: "Providers",
      icon: "i-carbon-container-services",
      slug: "providers",
    },
  ]
 
  return (
    <div class={`flex flex-col justify-between transition-transform ${props.isOpen ? 'translate-x-0' : '-translate-x-full'}`}> 
       <div class="w-60 h-full hidden md:block transform bg-base border-r dark:border-gray-800 text-gray-800 dark:text-gray-300">
          <header class="">
          <a class="flex items-center space-x-2 hover mt-4 py-3 justify-center" href="/">
            <img class="w-4 h-4" src={logo.src} alt="Logo" />
            <h1 class="px-4 text-xs font-extrabold bg-clip-text text-base">Titan Container</h1>
          </a>
          </header>
          <div class="text-center uppercase text-xs bg-blue-500 py-3 text-white rounded m-4 hover:bg-op-80">
          <span>Deploy</span>
            <span class="i-carbon-rocket ml-2"></span>
          </div>
          <nav class="px-4">
            <ul>
            <For each={menuList}>
                {instance => (
                  <li class="text-xs hover:bg-op-80 py-3 px-4 text-base hover:bg-gray-100 rounded dark:hover:bg-gray-500">
                    <span class={`${instance.icon} mr-2`}></span>
                    <a href={instance.slug}> {instance.title}</a>
                  </li>
                )}
            </For>
            </ul>
          </nav>
          <div class="absolute bottom-0 right-0 p-4">
            <ThemeToggle/>
          </div>
       </div>
    </div>
  )
}