import styles from "@styles/hero.module.scss"
const Hero = (props) => {
  return (
    <article className={styles.main}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={769}
      height={410}
      fill="none"
      {...props}
    >
      <g fill="#E5E5E5" clipPath="url(#a)">
        <path d="M0 5.443h87.124l60.062 53.222v57.311L49.183 29.62l-.306 158.945H0V5.443Z" />
        <path d="M219 188.565h-87.105l-60.053-53.231V77.999l98.003 86.34.297-158.904H219v183.13Z" />
      </g>
      <path
        fill="#ECECEC"
        d="M61.594 342H47.53l-27.375-44.906V342H6.094v-68.25h14.062l27.422 45v-45h14.016V342Zm40.781 0c-.625-1.219-1.078-2.734-1.359-4.547-3.282 3.656-7.547 5.485-12.797 5.485-4.969 0-9.094-1.438-12.375-4.313-3.25-2.875-4.875-6.5-4.875-10.875 0-5.375 1.984-9.5 5.953-12.375 4-2.875 9.766-4.328 17.297-4.359h6.234v-2.907c0-2.343-.61-4.218-1.828-5.625-1.188-1.406-3.078-2.109-5.672-2.109-2.281 0-4.078.547-5.39 1.641-1.282 1.093-1.922 2.593-1.922 4.5H72.094c0-2.938.906-5.657 2.719-8.157 1.812-2.5 4.374-4.453 7.687-5.859 3.313-1.438 7.031-2.156 11.156-2.156 6.25 0 11.203 1.578 14.86 4.734 3.687 3.125 5.531 7.531 5.531 13.219v21.984c.031 4.813.703 8.453 2.015 10.922V342h-13.687Zm-11.203-9.422c2 0 3.844-.437 5.531-1.312 1.688-.907 2.938-2.11 3.75-3.61v-8.718h-5.062c-6.782 0-10.391 2.343-10.829 7.031l-.046.797c0 1.687.593 3.078 1.78 4.172 1.188 1.093 2.813 1.64 4.876 1.64Zm49.5-53.766v12.469h8.672v9.938h-8.672v25.312c0 1.875.359 3.219 1.078 4.031.719.813 2.094 1.219 4.125 1.219 1.5 0 2.828-.109 3.984-.328v10.266a27.9 27.9 0 0 1-8.203 1.219c-9.5 0-14.344-4.797-14.531-14.391v-27.328h-7.406v-9.938h7.406v-12.469h13.547Zm29.437 18c3.594-4.312 8.11-6.468 13.547-6.468 11 0 16.578 6.39 16.735 19.172V342h-13.547v-32.109c0-2.907-.625-5.047-1.875-6.422-1.25-1.407-3.328-2.11-6.235-2.11-3.968 0-6.843 1.532-8.625 4.594V342h-13.547v-72h13.547v26.812ZM240 342c-.625-1.219-1.078-2.734-1.359-4.547-3.282 3.656-7.547 5.485-12.797 5.485-4.969 0-9.094-1.438-12.375-4.313-3.25-2.875-4.875-6.5-4.875-10.875 0-5.375 1.984-9.5 5.953-12.375 4-2.875 9.765-4.328 17.297-4.359h6.234v-2.907c0-2.343-.609-4.218-1.828-5.625-1.188-1.406-3.078-2.109-5.672-2.109-2.281 0-4.078.547-5.39 1.641-1.282 1.093-1.922 2.593-1.922 4.5h-13.547c0-2.938.906-5.657 2.719-8.157 1.812-2.5 4.374-4.453 7.687-5.859 3.313-1.438 7.031-2.156 11.156-2.156 6.25 0 11.203 1.578 14.86 4.734 3.687 3.125 5.531 7.531 5.531 13.219v21.984c.031 4.813.703 8.453 2.016 10.922V342H240Zm-11.203-9.422c2 0 3.844-.437 5.531-1.312 1.688-.907 2.938-2.11 3.75-3.61v-8.718h-5.062c-6.782 0-10.391 2.343-10.828 7.031l-.047.797c0 1.687.593 3.078 1.781 4.172 1.187 1.093 2.812 1.64 4.875 1.64Zm45.75-41.297.422 5.86c3.625-4.532 8.484-6.797 14.578-6.797 5.375 0 9.375 1.578 12 4.734 2.625 3.156 3.969 7.875 4.031 14.156V342h-13.547v-32.438c0-2.874-.625-4.953-1.875-6.234-1.25-1.312-3.328-1.969-6.234-1.969-3.813 0-6.672 1.625-8.578 4.875V342h-13.547v-50.719h12.75Zm101.531 32.813c0-2.656-.937-4.688-2.812-6.094-1.875-1.438-5.25-2.938-10.125-4.5-4.875-1.594-8.735-3.156-11.579-4.688-7.75-4.187-11.624-9.828-11.624-16.921 0-3.688 1.031-6.969 3.093-9.844 2.094-2.906 5.078-5.172 8.953-6.797 3.907-1.625 8.282-2.438 13.125-2.438 4.875 0 9.219.891 13.032 2.672 3.812 1.75 6.765 4.235 8.859 7.454 2.125 3.218 3.188 6.874 3.188 10.968h-14.063c0-3.125-.984-5.547-2.953-7.265-1.969-1.75-4.734-2.625-8.297-2.625-3.437 0-6.109.734-8.016 2.203-1.906 1.437-2.859 3.343-2.859 5.719 0 2.218 1.109 4.078 3.328 5.578 2.25 1.5 5.547 2.906 9.891 4.218 8 2.407 13.828 5.391 17.484 8.954 3.656 3.562 5.485 8 5.485 13.312 0 5.906-2.235 10.547-6.704 13.922-4.468 3.344-10.484 5.016-18.046 5.016-5.25 0-10.032-.954-14.344-2.86-4.313-1.937-7.61-4.578-9.891-7.922-2.25-3.344-3.375-7.218-3.375-11.625h14.11c0 7.531 4.5 11.297 13.5 11.297 3.343 0 5.953-.672 7.828-2.016 1.875-1.374 2.812-3.281 2.812-5.718Zm43.875 7.922c2.5 0 4.531-.688 6.094-2.063 1.562-1.375 2.375-3.203 2.437-5.484h12.704c-.032 3.437-.969 6.593-2.813 9.469-1.844 2.843-4.375 5.062-7.594 6.656-3.187 1.562-6.719 2.344-10.593 2.344-7.25 0-12.969-2.297-17.157-6.891-4.187-4.625-6.281-11-6.281-19.125v-.891c0-7.812 2.078-14.047 6.234-18.703 4.157-4.656 9.86-6.984 17.11-6.984 6.344 0 11.422 1.812 15.234 5.437 3.844 3.594 5.797 8.391 5.86 14.391h-12.704c-.062-2.625-.875-4.75-2.437-6.375-1.563-1.656-3.625-2.485-6.188-2.485-3.156 0-5.547 1.157-7.171 3.469-1.594 2.281-2.391 6-2.391 11.157v1.406c0 5.218.797 8.968 2.391 11.25 1.593 2.281 4.015 3.422 7.265 3.422Zm42.188-35.204c3.593-4.312 8.109-6.468 13.547-6.468 11 0 16.578 6.39 16.734 19.172V342h-13.547v-32.109c0-2.907-.625-5.047-1.875-6.422-1.25-1.407-3.328-2.11-6.234-2.11-3.969 0-6.844 1.532-8.625 4.594V342h-13.547v-72h13.547v26.812Zm52.968-5.531.422 5.86c3.625-4.532 8.485-6.797 14.578-6.797 5.375 0 9.375 1.578 12 4.734 2.625 3.156 3.969 7.875 4.032 14.156V342h-13.547v-32.438c0-2.874-.625-4.953-1.875-6.234-1.25-1.312-3.328-1.969-6.235-1.969-3.812 0-6.672 1.625-8.578 4.875V342h-13.547v-50.719h12.75Zm64.688 51.657c-7.438 0-13.5-2.282-18.188-6.844-4.656-4.563-6.984-10.641-6.984-18.235v-1.312c0-5.094.984-9.641 2.953-13.641 1.969-4.031 4.75-7.125 8.344-9.281 3.625-2.187 7.75-3.281 12.375-3.281 6.937 0 12.391 2.187 16.359 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.297c.438 3.312 1.75 5.969 3.938 7.969 2.219 2 5.015 3 8.391 3 5.218 0 9.296-1.891 12.234-5.672l6.656 7.453c-2.031 2.875-4.781 5.125-8.25 6.75-3.469 1.594-7.312 2.391-11.531 2.391Zm-1.547-41.626c-2.688 0-4.875.907-6.562 2.719-1.657 1.813-2.719 4.407-3.188 7.781h18.844v-1.078c-.063-3-.875-5.312-2.438-6.937-1.562-1.656-3.781-2.485-6.656-2.485ZM622.688 342h-13.594v-50.719h13.594V342Zm-14.391-63.844c0-2.031.672-3.703 2.015-5.015 1.376-1.313 3.235-1.969 5.579-1.969 2.312 0 4.156.656 5.531 1.969 1.375 1.312 2.062 2.984 2.062 5.015 0 2.063-.703 3.75-2.109 5.063-1.375 1.312-3.203 1.969-5.484 1.969-2.282 0-4.125-.657-5.532-1.969-1.375-1.313-2.062-3-2.062-5.063Zm23.484 38.11c0-7.907 1.766-14.204 5.297-18.891 3.563-4.687 8.422-7.031 14.578-7.031 4.938 0 9.016 1.844 12.235 5.531V270h13.593v72H665.25l-.656-5.391c-3.375 4.219-7.719 6.329-13.032 6.329-5.968 0-10.765-2.344-14.39-7.032-3.594-4.718-5.391-11.265-5.391-19.64Zm13.547.984c0 4.75.828 8.391 2.484 10.922 1.657 2.531 4.063 3.797 7.219 3.797 4.188 0 7.141-1.766 8.86-5.297v-20.016c-1.688-3.531-4.61-5.297-8.766-5.297-6.531 0-9.797 5.297-9.797 15.891Zm66 25.688c-7.437 0-13.5-2.282-18.187-6.844-4.657-4.563-6.985-10.641-6.985-18.235v-1.312c0-5.094.985-9.641 2.953-13.641 1.969-4.031 4.75-7.125 8.344-9.281 3.625-2.187 7.75-3.281 12.375-3.281 6.938 0 12.391 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.297c.437 3.312 1.75 5.969 3.937 7.969 2.219 2 5.016 3 8.391 3 5.219 0 9.297-1.891 12.234-5.672l6.656 7.453c-2.031 2.875-4.781 5.125-8.25 6.75-3.468 1.594-7.312 2.391-11.531 2.391Zm-1.547-41.626c-2.687 0-4.875.907-6.562 2.719-1.657 1.813-2.719 4.407-3.188 7.781h18.844v-1.078c-.063-3-.875-5.312-2.437-6.937-1.563-1.656-3.782-2.485-6.657-2.485Zm58.641 2.672c-1.844-.25-3.469-.375-4.875-.375-5.125 0-8.485 1.735-10.078 5.203V342h-13.547v-50.719h12.797l.375 6.047c2.718-4.656 6.484-6.984 11.297-6.984 1.5 0 2.906.203 4.218.609l-.187 13.031Z"
      />
      <path
        fill="#232323"
        d="M31.11 384.062H15.194V400h-2.883v-34.125h21.141v2.461H15.195v13.266H31.11v2.46Zm23.343 12.727c-1.687 2.453-4.383 3.68-8.086 3.68-2.703 0-4.758-.781-6.164-2.344-1.406-1.578-2.125-3.906-2.156-6.984v-16.5h2.789v16.148c0 4.828 1.953 7.242 5.86 7.242 4.062 0 6.632-1.679 7.71-5.039v-18.351h2.813V400H54.5l-.047-3.211ZM67.672 400h-2.813v-36h2.813v36Zm10.781 0h-2.812v-36h2.812v36Zm39.281-8.391c0-1.89-.664-3.382-1.992-4.476-1.328-1.11-3.758-2.156-7.289-3.141-3.531-1-6.109-2.086-7.734-3.258-2.313-1.656-3.469-3.828-3.469-6.515 0-2.61 1.07-4.727 3.211-6.352 2.156-1.64 4.906-2.461 8.25-2.461 2.266 0 4.289.438 6.07 1.313 1.797.875 3.188 2.093 4.172 3.656.985 1.563 1.477 3.305 1.477 5.227h-2.907c0-2.329-.796-4.196-2.39-5.602-1.594-1.422-3.735-2.133-6.422-2.133-2.609 0-4.688.586-6.234 1.758-1.547 1.156-2.321 2.672-2.321 4.547 0 1.734.696 3.148 2.086 4.242 1.391 1.094 3.617 2.063 6.68 2.906 3.062.828 5.383 1.696 6.961 2.602 1.578.89 2.765 1.961 3.562 3.211.797 1.25 1.196 2.726 1.196 4.429 0 2.688-1.079 4.844-3.235 6.469-2.14 1.625-4.968 2.438-8.484 2.438-2.406 0-4.617-.43-6.633-1.289-2-.86-3.523-2.063-4.57-3.61-1.031-1.547-1.547-3.32-1.547-5.32h2.883c0 2.406.898 4.305 2.695 5.695 1.797 1.391 4.188 2.086 7.172 2.086 2.656 0 4.789-.586 6.398-1.758 1.61-1.171 2.414-2.726 2.414-4.664Zm12.844-23.461v6.493h5.25v2.297h-5.25v16.898c0 1.406.25 2.453.75 3.141.516.687 1.367 1.031 2.555 1.031.469 0 1.226-.078 2.273-.235l.117 2.297c-.734.266-1.734.399-3 .399-1.921 0-3.32-.555-4.195-1.664-.875-1.125-1.312-2.774-1.312-4.946v-16.921h-4.664v-2.297h4.664v-6.493h2.812ZM157.648 400c-.281-.797-.46-1.977-.539-3.539-.984 1.281-2.242 2.273-3.773 2.977a11.56 11.56 0 0 1-4.828 1.031c-2.438 0-4.414-.68-5.93-2.039-1.5-1.36-2.25-3.078-2.25-5.157 0-2.468 1.024-4.421 3.07-5.859 2.063-1.437 4.93-2.156 8.602-2.156h5.086v-2.883c0-1.813-.563-3.234-1.688-4.266-1.109-1.047-2.734-1.57-4.875-1.57-1.953 0-3.57.5-4.851 1.5-1.281 1-1.922 2.203-1.922 3.609l-2.812-.023c0-2.016.937-3.758 2.812-5.227 1.875-1.484 4.18-2.226 6.914-2.226 2.828 0 5.055.711 6.68 2.133 1.64 1.406 2.484 3.375 2.531 5.906v12c0 2.453.258 4.289.773 5.508V400h-3Zm-8.812-2.016c1.875 0 3.547-.453 5.016-1.359 1.484-.906 2.562-2.117 3.234-3.633v-5.578h-5.016c-2.797.031-4.984.547-6.562 1.547-1.578.984-2.367 2.344-2.367 4.078 0 1.422.523 2.602 1.57 3.539 1.062.938 2.437 1.406 4.125 1.406Zm27.914.118c1.953 0 3.586-.547 4.898-1.641 1.329-1.109 2.047-2.539 2.157-4.289h2.695a7.996 7.996 0 0 1-1.453 4.242c-.891 1.266-2.078 2.258-3.563 2.977a10.632 10.632 0 0 1-4.734 1.078c-3.328 0-5.969-1.157-7.922-3.469-1.937-2.312-2.906-5.422-2.906-9.328v-.844c0-2.5.437-4.711 1.312-6.633.875-1.922 2.125-3.406 3.75-4.453 1.641-1.047 3.555-1.57 5.743-1.57 2.781 0 5.07.828 6.867 2.484 1.812 1.656 2.781 3.836 2.906 6.539h-2.695c-.125-1.984-.844-3.586-2.157-4.804-1.296-1.219-2.937-1.829-4.921-1.829-2.532 0-4.5.915-5.907 2.743-1.39 1.828-2.086 4.39-2.086 7.687v.82c0 3.235.696 5.758 2.086 7.571 1.407 1.812 3.383 2.719 5.93 2.719Zm21.398-10.875-3.21 3.093V400h-2.813v-36h2.813v23.039l2.648-2.859 9.703-9.539h3.539l-10.758 10.687L211.766 400h-3.352l-10.266-12.773Zm36.141 3.562 1.055 5.297 1.289-5.063 7.406-25.148h2.602l7.312 25.148 1.266 5.11 1.125-5.344 6.164-24.914h2.953L256.719 400h-2.766l-7.734-26.695-.867-3.375-.844 3.375L236.586 400h-2.766l-8.718-34.125h2.953l6.234 24.914Zm45.141 9.68c-2.157 0-4.11-.531-5.86-1.594-1.734-1.063-3.086-2.539-4.054-4.43-.969-1.906-1.454-4.039-1.454-6.398v-1.008c0-2.437.469-4.633 1.407-6.586.953-1.953 2.273-3.484 3.961-4.594 1.687-1.125 3.515-1.687 5.484-1.687 3.078 0 5.516 1.055 7.313 3.164 1.812 2.094 2.718 4.961 2.718 8.602v1.57h-18.093v.539c0 2.875.82 5.273 2.46 7.195 1.657 1.906 3.735 2.86 6.235 2.86 1.5 0 2.82-.274 3.961-.821 1.156-.547 2.203-1.422 3.14-2.625l1.758 1.336c-2.062 2.985-5.054 4.477-8.976 4.477Zm-.516-23.907c-2.109 0-3.891.774-5.344 2.321-1.437 1.547-2.312 3.625-2.625 6.234h15.211v-.305c-.078-2.437-.773-4.421-2.086-5.953-1.312-1.531-3.031-2.297-5.156-2.297Zm35.906 11.016c0 3.953-.875 7.094-2.625 9.422-1.75 2.312-4.101 3.469-7.054 3.469-3.532 0-6.203-1.313-8.016-3.938l-.117 3.469h-2.625v-36h2.789v14.32c1.781-2.765 4.422-4.148 7.922-4.148 3 0 5.367 1.148 7.101 3.445 1.75 2.281 2.625 5.461 2.625 9.539v.422Zm-2.812-.492c0-3.344-.649-5.922-1.946-7.734-1.296-1.829-3.124-2.743-5.484-2.743-1.797 0-3.32.446-4.57 1.336-1.25.875-2.196 2.164-2.836 3.867v11.438c1.406 3.188 3.89 4.781 7.453 4.781 2.313 0 4.117-.914 5.414-2.742 1.313-1.828 1.969-4.562 1.969-8.203ZM333.359 400v-34.125h9.539c2.797 0 5.305.641 7.524 1.922 2.219 1.265 3.945 3.086 5.18 5.461 1.25 2.375 1.875 5.078 1.875 8.109v3.141c0 3.047-.618 5.75-1.852 8.109-1.234 2.36-2.977 4.18-5.227 5.461-2.234 1.281-4.804 1.922-7.71 1.922h-9.329Zm2.883-31.664v29.226h6.469c3.594 0 6.477-1.187 8.648-3.562 2.172-2.391 3.258-5.617 3.258-9.68v-3c0-3.922-1.07-7.062-3.211-9.422-2.14-2.359-4.961-3.546-8.461-3.562h-6.703Zm37.735 32.133c-2.157 0-4.11-.531-5.86-1.594-1.734-1.063-3.086-2.539-4.055-4.43-.968-1.906-1.453-4.039-1.453-6.398v-1.008c0-2.437.469-4.633 1.407-6.586.953-1.953 2.273-3.484 3.961-4.594 1.687-1.125 3.515-1.687 5.484-1.687 3.078 0 5.516 1.055 7.312 3.164 1.813 2.094 2.719 4.961 2.719 8.602v1.57h-18.094v.539c0 2.875.821 5.273 2.461 7.195 1.657 1.906 3.735 2.86 6.235 2.86 1.5 0 2.82-.274 3.961-.821 1.156-.547 2.203-1.422 3.14-2.625l1.758 1.336c-2.062 2.985-5.055 4.477-8.976 4.477Zm-.516-23.907c-2.109 0-3.891.774-5.344 2.321-1.437 1.547-2.312 3.625-2.625 6.234h15.211v-.305c-.078-2.437-.773-4.421-2.086-5.953-1.312-1.531-3.031-2.297-5.156-2.297Zm23.062 19.571 7.711-21.492h2.883L397.648 400h-2.273l-9.516-25.359h2.883l7.781 21.492Zm24.704 4.336c-2.157 0-4.11-.531-5.86-1.594-1.734-1.063-3.086-2.539-4.055-4.43-.968-1.906-1.453-4.039-1.453-6.398v-1.008c0-2.437.469-4.633 1.407-6.586.953-1.953 2.273-3.484 3.961-4.594 1.687-1.125 3.515-1.687 5.484-1.687 3.078 0 5.516 1.055 7.312 3.164 1.813 2.094 2.719 4.961 2.719 8.602v1.57h-18.094v.539c0 2.875.821 5.273 2.461 7.195 1.657 1.906 3.735 2.86 6.235 2.86 1.5 0 2.82-.274 3.961-.821 1.156-.547 2.203-1.422 3.14-2.625l1.758 1.336c-2.062 2.985-5.055 4.477-8.976 4.477Zm-.516-23.907c-2.109 0-3.891.774-5.344 2.321-1.437 1.547-2.312 3.625-2.625 6.234h15.211v-.305c-.078-2.437-.773-4.421-2.086-5.953-1.312-1.531-3.031-2.297-5.156-2.297ZM439.344 400h-2.813v-36h2.813v36Zm6.094-13.055c0-2.437.468-4.633 1.406-6.586.953-1.953 2.289-3.468 4.008-4.547 1.734-1.093 3.695-1.64 5.882-1.64 3.375 0 6.11 1.187 8.204 3.562 2.093 2.36 3.14 5.493 3.14 9.399v.586c0 2.453-.476 4.664-1.43 6.633-.937 1.953-2.265 3.46-3.984 4.523-1.719 1.063-3.68 1.594-5.883 1.594-3.359 0-6.093-1.18-8.203-3.539-2.094-2.375-3.14-5.516-3.14-9.422v-.563Zm2.812.774c0 3.031.781 5.523 2.344 7.476 1.578 1.938 3.64 2.907 6.187 2.907 2.531 0 4.578-.969 6.141-2.907 1.578-1.953 2.367-4.523 2.367-7.711v-.539c0-1.937-.359-3.711-1.078-5.32-.719-1.609-1.727-2.852-3.023-3.727-1.297-.89-2.782-1.336-4.454-1.336-2.5 0-4.539.985-6.117 2.954-1.578 1.953-2.367 4.515-2.367 7.687v.516Zm46.031-.141c0 3.953-.875 7.094-2.625 9.422-1.75 2.312-4.094 3.469-7.031 3.469-3.469 0-6.125-1.219-7.969-3.657v12.938h-2.789v-35.109h2.602l.14 3.586c1.829-2.704 4.477-4.055 7.946-4.055 3.031 0 5.406 1.148 7.125 3.445 1.734 2.297 2.601 5.485 2.601 9.563v.398Zm-2.812-.492c0-3.234-.664-5.789-1.992-7.664-1.329-1.875-3.18-2.813-5.555-2.813-1.719 0-3.195.414-4.43 1.243-1.234.828-2.18 2.031-2.836 3.609v12.164c.672 1.453 1.633 2.563 2.883 3.328 1.25.766 2.727 1.149 4.43 1.149 2.359 0 4.195-.938 5.508-2.813 1.328-1.891 1.992-4.625 1.992-8.203Zm18.867 13.383c-2.156 0-4.109-.531-5.859-1.594-1.735-1.063-3.086-2.539-4.055-4.43-.969-1.906-1.453-4.039-1.453-6.398v-1.008c0-2.437.469-4.633 1.406-6.586.953-1.953 2.273-3.484 3.961-4.594 1.687-1.125 3.516-1.687 5.484-1.687 3.078 0 5.516 1.055 7.313 3.164 1.812 2.094 2.719 4.961 2.719 8.602v1.57h-18.094v.539c0 2.875.82 5.273 2.461 7.195 1.656 1.906 3.734 2.86 6.234 2.86 1.5 0 2.82-.274 3.961-.821 1.156-.547 2.203-1.422 3.141-2.625l1.757 1.336c-2.062 2.985-5.054 4.477-8.976 4.477Zm-.516-23.907c-2.109 0-3.89.774-5.343 2.321-1.438 1.547-2.313 3.625-2.625 6.234h15.21v-.305c-.078-2.437-.773-4.421-2.085-5.953-1.313-1.531-3.032-2.297-5.157-2.297Zm27.211.469a10.497 10.497 0 0 0-1.898-.164c-1.75 0-3.235.492-4.453 1.477-1.203.968-2.063 2.383-2.578 4.242V400h-2.79v-25.359h2.743l.047 4.031c1.484-3 3.867-4.5 7.148-4.5.781 0 1.398.101 1.852.305l-.071 2.554Z"
      />
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h219v194H0z" />
        </clipPath>
      </defs>
    </svg>
    </article>
  );
};

export default Hero;
