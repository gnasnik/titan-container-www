import { Show, onMount } from 'solid-js'
import { useDark } from '../hooks/useDark'
import { useDisableTransition } from '../hooks/useDisableTransition'

export default () => {
  const [isDark, setIsDark] = useDark()
  const { disableTransition, removeDisableTransition } = useDisableTransition()

  onMount(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark() ? '#222222' : '#fafafa')
  })

  const handleDarkChanged = () => {
    disableTransition()
    const dark = !isDark()
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#222222' : '#fafafa')
    setIsDark(dark)
    removeDisableTransition()
  }

  return (
    <div
      class="rounded-md cursor-pointer text-base  hv-foreground"
      onClick={handleDarkChanged}
    >
      <Show when={isDark()} >
        <div i-carbon-moon />
      </Show>
      <Show when={!isDark()}>
        <div i-carbon-light />
      </Show>
    </div>
  )
}
