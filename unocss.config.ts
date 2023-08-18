import {
  defineConfig,
  presetTagify,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { presetDaisy } from "unocss-preset-daisy";

export default defineConfig({
  presets: [
    presetUno({
      dark: 'class',
    }),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTagify(),
    presetDaisy({
      // themes: ["forest"],
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  rules: [
    [
      /^family-([a-zA-Z]*)$/,
      ([, c]) => {
        return {
          "font-family": `${c}, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
        };
      },
    ],
  ],
  shortcuts: [
    {
      "flex-center": "items-center justify-center",
    },
    {
      "absolute-center": "-translate-1/2 left-1/2 top-1/2",
    },
    [/^size-(.*)$/, ([, s]) => `h-${s} w-${s}`],
    {
      'bg-base': 'bg-white dark:bg-[#232324]',
      'bg-base-100': 'bg-light-200/50 dark:bg-[#181818]',
      'bg-base-200': 'bg-light-400 dark:bg-[#202020]',
      'bg-blur': 'bg-light-200/85 dark:bg-[#232324]/85 backdrop-blur-xl backdrop-saturate-150',
      'bg-sidebar': 'bg-white dark:bg-[#232324]',
      'bg-modal': 'bg-white dark:bg-[#181818]',
      'bg-darker': 'bg-black/4 dark:bg-white/4',
      'fg-base': 'text-dark dark:text-[#dadada]',
      'border-base': 'border-light-700 dark:border-[#2a2a2a]',
      'border-b-base': 'border-b-light-700 dark:border-b-[#2a2a2a]',
      'border-base-100': 'border-light-900 dark:border-[#404040]',
      'hv-base': 'transition-colors cursor-pointer hover:bg-darker',
      'hv-foreground': 'transition-opacity cursor-pointer op-70 hover:op-100',
      'input-base': 'bg-transparent placeholder:op-50 dark:placeholder:op-20 focus:(ring-0 outline-none) resize-none',
      'button': 'mt-4 px-3 py-2 text-xs border border-base rounded-lg hv-base hover:border-base-100',
      'emerald-button': 'button bg-emerald-600 !hover:bg-emerald-700 text-white',
      'emerald-light-button': 'button text-emerald-400 bg-emerald/12 !border-emerald-400 !hover-bg-emerald-600 !hover-border-emerald-600 !hover-text-light-700',
      'max-w-base': 'max-w-3xl mx-auto',
      'text-error': 'text-red-700 dark:text-red-400/80',
      'border-error': 'border border-red-700 dark:border-red-400/80',
      'text-info': 'text-gray-400 dark:text-gray-200',
      'menu-icon': 'cursor-pointer text-base fg-base hover-text-emerald-600',
      'fc': 'flex justify-center',
      'fi': 'flex items-center',
      'fcc': 'fc items-center',
      'fb': 'flex justify-between',
    },
  ],
  theme: {
    fontSize: {
      xs: ["clamp(0.88rem, calc(0.93rem + 0.32vw), 1.12rem)", "1.4"],
      sm: ["clamp(1.00rem, calc(0.96rem + 0.53vw), 1.30rem)", "1.4"],
      base: ["clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)", "1.5"],
      md: ["clamp(1.20rem, calc(1.00rem + 1.00vw), 1.64rem)", "1.5"],
      lg: ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.4"],
      xl: ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
      "2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)", "1.2"],
      "3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)", "1.1"],
      "4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
      "5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
      "6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)", "1"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
});
