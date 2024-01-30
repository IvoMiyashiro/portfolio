import type { LogosProps } from './types.logos'

export const NestJSLogo = ({ isActive, inactiveColor, className, ...props }: LogosProps) => (
  <svg
    viewBox="6.006 4.24 275.796 249.238"
    className={className}
    { ...props }
  >
    <path
      fill={`${isActive ? '#e0234e' : inactiveColor}`}
      fillRule="evenodd"
      className="transition-all"
      d="M153.338 4.24c-1.809 0-3.489.388-5.04.905 3.296 2.197 5.105 5.105 6.01 8.4.065.453.194.776.258 1.228.065.388.13.775.13 1.163.258 5.687-1.487 6.397-2.715 9.758-1.874 4.33-1.357 8.982.905 12.73.194.452.452.969.776 1.421-2.456-16.348 11.179-18.804 13.699-23.909.194-4.459-3.49-7.431-6.397-9.499-2.78-1.68-5.3-2.197-7.626-2.197zm20.55 3.683c-.26 1.487-.065 1.099-.13 1.874-.064.517-.064 1.163-.129 1.68-.129.517-.258 1.034-.452 1.551-.13.517-.323 1.034-.517 1.551-.259.517-.452.97-.71 1.486-.195.259-.324.517-.518.776l-.388.581a22.32 22.32 0 0 1-.969 1.293c-.388.388-.71.84-1.163 1.163v.065c-.388.323-.775.71-1.228 1.034-1.357 1.033-2.908 1.809-4.33 2.778-.452.323-.904.582-1.292.97-.452.323-.84.646-1.227 1.033-.453.388-.776.776-1.164 1.228-.323.388-.71.84-.969 1.293-.323.452-.646.904-.905 1.357-.258.517-.452.969-.71 1.486-.194.517-.388.97-.517 1.486a20.921 20.921 0 0 0-.453 1.616c-.064.258-.064.581-.129.84-.065.258-.065.517-.129.775 0 .517-.065 1.099-.065 1.616 0 .387 0 .775.065 1.163 0 .517.065 1.034.194 1.615.065.517.194 1.034.323 1.551.194.517.323 1.034.517 1.55.13.324.323.647.452.906l-14.862-5.752c-2.52-.71-4.976-1.357-7.496-1.938l-4.071-.97a119.971 119.971 0 0 0-11.76-1.744c-.13 0-.195-.065-.324-.065-3.877-.388-7.69-.581-11.567-.581-2.843 0-5.686.129-8.465.323-3.942.258-7.884.775-11.825 1.421-.97.13-1.94.323-2.908.517-2.004.388-3.942.84-5.816 1.293l-2.908.775c-.97.388-1.874.84-2.779 1.228l-2.132.97c-.13.064-.259.064-.323.128-.646.323-1.228.582-1.81.905-.193.065-.323.13-.452.194-.71.323-1.421.71-2.003 1.034-.452.194-.905.452-1.292.646-.194.13-.453.259-.582.323-.582.323-1.163.646-1.68.97-.582.322-1.099.646-1.551.969s-.905.581-1.292.904c-.065.065-.13.065-.194.13-.388.258-.84.581-1.228.904l-.13.13-.968.775c-.13.064-.26.194-.388.258-.323.259-.646.582-.97.84-.064.13-.193.194-.258.259-.388.388-.775.71-1.163 1.098-.065 0-.065.065-.13.13-.387.323-.775.71-1.163 1.098-.064.065-.064.13-.129.13a15.16 15.16 0 0 0-.969 1.033c-.13.13-.323.259-.452.388-.323.388-.711.775-1.099 1.163-.065.13-.194.194-.258.323-.517.517-.97 1.034-1.487 1.551l-.193.194c-1.034 1.098-2.133 2.197-3.296 3.166a36.732 36.732 0 0 1-3.619 2.843 48.856 48.856 0 0 1-3.877 2.456 39.382 39.382 0 0 1-4.071 1.939 46.55 46.55 0 0 1-4.2 1.55c-2.714.582-5.493 1.68-7.884 1.874-.517 0-1.098.13-1.615.194-.582.13-1.099.259-1.616.388l-1.55.582c-.518.193-1.035.452-1.552.71-.452.323-.969.582-1.421.905-.453.323-.905.71-1.293 1.099-.452.323-.904.775-1.292 1.163-.388.452-.775.84-1.099 1.292-.323.517-.71.97-.969 1.486-.323.453-.646.97-.904 1.487-.26.581-.517 1.098-.711 1.68a49.803 49.803 0 0 0-.582 1.68c-.129.517-.258 1.034-.323 1.55 0 .066-.065.13-.065.195-.129.581-.129 1.357-.194 1.744-.064.453-.129.84-.129 1.293 0 .258 0 .581.065.84.065.452.13.84.259 1.228.129.387.258.775.452 1.163v.064c.194.388.452.776.71 1.164.26.387.518.775.84 1.163.324.323.712.71 1.1 1.034.387.387.775.71 1.227 1.034 1.551 1.357 1.939 1.809 3.942 2.843.323.194.646.323 1.034.517.065 0 .129.064.194.064 0 .13 0 .194.064.324.065.517.194 1.034.324 1.55a8.71 8.71 0 0 0 .516 1.551c.194.388.324.776.517 1.164.065.129.13.258.194.323.259.517.517.969.776 1.421l.969 1.357c.323.388.71.84 1.099 1.228.387.388.775.71 1.227 1.099 0 0 .065.064.13.064.387.323.775.647 1.163.905.452.323.904.582 1.421.84.453.259.97.517 1.487.71.387.195.84.324 1.292.453.065.065.129.065.258.13.26.064.582.129.84.193-.193 3.49-.258 6.785.26 7.948.58 1.293 3.424-2.649 6.267-7.172-.388 4.458-.646 9.693 0 11.243.711 1.616 4.588-3.424 7.948-8.982C88.397 104.336 130.206 136 134.6 180.716c-.84-6.979-9.435-10.856-13.377-9.887-1.938 4.782-5.234 10.921-10.533 14.734a41.434 41.434 0 0 0-.646-12.924c-1.421 5.945-4.2 11.502-8.013 16.284-6.138.452-12.277-2.52-15.508-6.98-.259-.193-.323-.58-.517-.84-.194-.452-.388-.904-.517-1.356a5.365 5.365 0 0 1-.388-1.357c-.065-.453-.065-.905-.065-1.422v-.97c.065-.452.194-.904.323-1.356.13-.453.259-.905.453-1.357.258-.453.452-.905.775-1.357 1.099-3.102 1.099-5.622-.904-7.108a7.36 7.36 0 0 0-1.228-.647c-.259-.064-.582-.193-.84-.258-.194-.065-.323-.13-.517-.194-.453-.13-.905-.259-1.357-.323a4.923 4.923 0 0 0-1.357-.194c-.453-.065-.97-.13-1.422-.13-.323 0-.646.066-.97.066a5.04 5.04 0 0 0-1.42.193c-.453.065-.905.13-1.358.259-.452.13-.905.259-1.357.452-.452.194-.84.388-1.292.582-.388.194-.776.452-1.228.646-15.056 9.822-6.074 32.827 4.2 39.483-3.877.71-7.819 1.55-8.917 2.39l-.13.13c2.78 1.68 5.687 3.102 8.724 4.33a214.507 214.507 0 0 0 10.469 3.101v.065a62.516 62.516 0 0 0 16.284 1.163c28.626-2.003 52.083-23.78 56.348-52.471.13.581.259 1.098.388 1.68.194 1.163.452 2.39.581 3.619v.064c.13.582.194 1.164.259 1.68v.26c.065.58.13 1.162.13 1.68.064.71.128 1.42.128 2.132v1.034c0 .323.065.71.065 1.033 0 .388-.065.776-.065 1.164v.904c0 .453-.065.84-.065 1.293 0 .258 0 .517-.064.84 0 .452-.065.904-.065 1.421-.065.194-.065.388-.065.582-.064.517-.129.97-.194 1.486 0 .194 0 .388-.064.582-.065.646-.194 1.228-.259 1.874v.129c-.129.582-.258 1.228-.388 1.81v.193l-.387 1.745c0 .065-.065.194-.065.259-.13.581-.259 1.163-.452 1.744v.194c-.194.647-.388 1.228-.517 1.81-.065.064-.065.129-.065.129l-.582 1.938c-.258.647-.452 1.228-.71 1.874-.259.647-.453 1.293-.711 1.874-.259.647-.517 1.228-.776 1.874h-.064c-.26.582-.517 1.228-.84 1.81-.065.194-.13.323-.194.452-.065.065-.065.13-.13.194-4.2 8.465-10.403 15.896-18.158 21.712-.517.323-1.034.71-1.55 1.099-.13.129-.324.193-.453.323a27.34 27.34 0 0 1-1.421.969l.193.388h.065l2.714-.388h.065c1.68-.259 3.36-.582 5.04-.905.452-.065.97-.194 1.422-.323.323-.065.581-.129.904-.194.453-.064.905-.194 1.357-.258.388-.13.776-.194 1.164-.323 6.462-1.551 12.73-3.684 18.74-6.204-10.275 14.023-24.04 25.331-40.13 32.762 7.432-.517 14.863-1.744 22.036-3.812 26.042-7.69 47.948-25.202 61.065-48.788a103.145 103.145 0 0 1-17.382 41.55 101.732 101.732 0 0 0 17.253-14.345c14.475-15.121 23.974-34.313 27.205-54.927a102.9 102.9 0 0 1 1.874 31.147c46.655-65.072 3.877-132.535-14.023-150.305-.064-.13-.129-.194-.129-.323-.064.064-.064.064-.064.129 0-.065 0-.065-.065-.13 0 .776-.065 1.551-.13 2.327-.193 1.486-.387 2.908-.646 4.33-.323 1.421-.71 2.843-1.098 4.264a53.747 53.747 0 0 1-1.55 4.136 55.49 55.49 0 0 1-1.94 3.942c-.71 1.227-1.486 2.52-2.326 3.683a49.368 49.368 0 0 1-2.65 3.49c-.969 1.163-2.002 2.197-3.036 3.23a41.646 41.646 0 0 1-1.874 1.616c-.517.452-.97.84-1.487 1.292-1.163.905-2.326 1.745-3.618 2.52-1.228.776-2.52 1.551-3.813 2.198-1.357.646-2.714 1.227-4.07 1.809-1.358.517-2.78.97-4.201 1.357a52.05 52.05 0 0 1-4.33.97c-1.486.258-2.972.387-4.394.516-1.034.065-2.068.13-3.102.13-1.486 0-2.972-.13-4.394-.26-1.486-.128-2.972-.322-4.394-.645-1.486-.26-2.908-.647-4.33-1.099h-.064c1.422-.13 2.843-.259 4.265-.517a46.84 46.84 0 0 0 4.33-.97 45.495 45.495 0 0 0 4.2-1.356c1.421-.517 2.778-1.163 4.07-1.81 1.358-.646 2.586-1.357 3.878-2.132 1.228-.84 2.455-1.68 3.619-2.585a35.333 35.333 0 0 0 3.295-2.908c1.099-.97 2.068-2.068 3.037-3.166a63.86 63.86 0 0 0 2.714-3.49c.13-.193.259-.452.388-.646.646-1.034 1.292-2.068 1.874-3.102a44.537 44.537 0 0 0 1.939-3.941 45.28 45.28 0 0 0 1.55-4.136c.453-1.357.776-2.779 1.099-4.2.259-1.486.517-2.908.646-4.33.13-1.486.259-2.972.259-4.394 0-1.034-.065-2.068-.13-3.102-.128-1.486-.322-2.907-.516-4.33a46.844 46.844 0 0 0-.97-4.329c-.452-1.357-.904-2.778-1.421-4.135s-1.163-2.714-1.81-4.007c-.71-1.292-1.421-2.584-2.197-3.812a71.347 71.347 0 0 0-2.584-3.554 136.72 136.72 0 0 0-2.973-3.296 40.422 40.422 0 0 0-1.68-1.615 118.979 118.979 0 0 0-8.982-6.333c-.452-.259-.84-.452-1.293-.646-2.132-1.357-4.135-2.068-6.138-2.714z"
    />
  </svg>
)

export default NestJSLogo
