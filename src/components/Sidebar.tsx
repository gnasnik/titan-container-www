import {For} from 'solid-js';

interface Props {
  isOpen: boolean;
}

export default (props: Props) => {
  const onClose = () => {}
  const onClick = () => {

  }
  const menuList = [
    {
      title: "Home",
      icon: "i-carbon-home"
    },
    {
      title: "Deployments",
      icon: "i-carbon-deploy"
    },
    {
      title: "Providers",
      icon: "i-carbon-container-services"
    },
  ]
 
  return (
    <div class={`hidden md:block top-0 flex left-0 h-full min-h-90vh w-80 transition-transform transform bg-base border-r dark:border-gray-800 text-gray-800 dark:text-gray-300
        ${props.isOpen ? 'translate-x-0' : '-translate-x-full'}`}> 
        <header class="text-center uppercase text-xs bg-blue-500 py-2 text-white rounded m-4 hover:bg-op-80">
          <span>Deploy</span>
          <span class="i-carbon-rocket ml-2"></span>
        </header>
        <nav class="px-4 h-full">
          <For each={menuList}>
              {instance => (
                <div class="text-xs hover:bg-op-80 py-2 px-4 text-base hover:bg-gray-100 rounded dark:hover:bg-gray-500">
                  <span class={`${instance.icon} mr-2`}></span>
                  <span> {instance.title}</span>
                </div>
              )}
          </For>
        </nav>
        <div i-carbon-menu class="absolute bottom-4 right-4 py-4 px-2 cursor-pointer"></div>
      </div>
  )
}