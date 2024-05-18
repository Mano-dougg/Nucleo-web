import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import { MenuItemProps } from './types/MenuItemProps'

const SocialIcons = ({ onToggle }: MenuItemProps) => {
  const { isDarkThemed } = useContext(ThemeContext)
  return (
    <>
      <li onClick={onToggle}>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M19.7386 6.51894C19.7525 6.71436 19.7525 6.90983 19.7525 7.10525C19.7525 13.0659 15.2157 19.9339 6.92386 19.9339C4.36928 19.9339 1.9962 19.194 0 17.9098C0.362957 17.9517 0.711906 17.9656 1.08883 17.9656C3.19666 17.9656 5.13704 17.2537 6.68654 16.0393C4.7043 15.9974 3.04313 14.6992 2.47079 12.9123C2.75 12.9542 3.02917 12.9821 3.32234 12.9821C3.72715 12.9821 4.132 12.9263 4.50888 12.8286C2.4429 12.4098 0.893363 10.5951 0.893363 8.40347V8.34765C1.49359 8.68268 2.19162 8.89206 2.93141 8.91995C1.71695 8.11029 0.921293 6.72833 0.921293 5.16487C0.921293 4.32732 1.1446 3.55955 1.53549 2.8895C3.75504 5.62554 7.09135 7.4123 10.8324 7.60777C10.7626 7.27274 10.7207 6.92379 10.7207 6.5748C10.7207 4.09 12.7309 2.06592 15.2296 2.06592C16.5278 2.06592 17.7004 2.61033 18.524 3.48977C19.543 3.29435 20.5202 2.91743 21.3857 2.40095C21.0506 3.44792 20.3387 4.32736 19.4035 4.8857C20.3109 4.78803 21.1903 4.53671 21.9999 4.18776C21.3858 5.08112 20.618 5.87677 19.7386 6.51894Z" fill={isDarkThemed ? "#FAF4E6" : "#0065FF"} />
          </svg>
        </a>
      </li>
      <li onClick={onToggle}>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <g clipPath="url(#clip0_317_153)">
              <path d="M9.37757 6.00117C10.1439 6.00117 10.8788 5.68504 11.4207 5.12232C11.9626 4.5596 12.267 3.79639 12.267 3.00059C12.267 2.20478 11.9626 1.44157 11.4207 0.878851C10.8788 0.316132 10.1439 0 9.37757 0L3.59866 0C2.83278 0 2.09827 0.315947 1.55671 0.878336C1.01515 1.44073 0.710906 2.20349 0.710906 2.99883C0.710906 3.79417 1.01515 4.55693 1.55671 5.11932C2.09827 5.68171 2.83278 5.99766 3.59866 5.99766C2.83233 5.99766 2.09739 6.31379 1.55551 6.87651C1.01364 7.43923 0.709213 8.20244 0.709213 8.99824C0.709213 9.79405 1.01364 10.5573 1.55551 11.12C2.09739 11.6827 2.83233 11.9988 3.59866 11.9988C3.02718 11.9985 2.46844 12.1741 1.99309 12.5035C1.51773 12.833 1.14712 13.3014 0.928115 13.8495C0.70911 14.3977 0.651549 15.0009 0.762711 15.5831C0.873873 16.1652 1.14876 16.7 1.55262 17.1199C1.95649 17.5398 2.47117 17.8259 3.03161 17.942C3.59204 18.0581 4.17305 17.9991 4.70115 17.7723C5.22926 17.5455 5.68075 17.1612 5.99852 16.6679C6.3163 16.1747 6.48609 15.5946 6.48642 15.0012V6.00117H9.37757ZM9.37757 6.00117C8.80642 6.00117 8.2481 6.17705 7.77321 6.50657C7.29832 6.83608 6.92819 7.30443 6.70962 7.8524C6.49106 8.40036 6.43387 9.00333 6.5453 9.58504C6.65672 10.1668 6.93175 10.7011 7.33561 11.1205C7.73947 11.5399 8.25402 11.8255 8.81419 11.9412C9.37436 12.0569 9.95499 11.9975 10.4827 11.7706C11.0103 11.5436 11.4613 11.1592 11.7786 10.6661C12.096 10.1729 12.2653 9.59311 12.2653 9C12.2652 8.20469 11.961 7.44198 11.4194 6.87961C10.8779 6.31724 10.1434 6.00127 9.37757 6.00117Z" fill={isDarkThemed ? "#FAF4E6" : "#0065FF"} />
            </g>
            <defs>
              <clipPath id="clip0_317_153">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </li>
      <li onClick={onToggle}>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <g clipPath="url(#clip0_317_155)">
              <path d="M8.00356 4.95708C5.73213 4.95708 3.89999 6.76059 3.89999 8.99653C3.89999 11.2325 5.73213 13.036 8.00356 13.036C10.275 13.036 12.1071 11.2325 12.1071 8.99653C12.1071 6.76059 10.275 4.95708 8.00356 4.95708ZM8.00356 11.6227C6.5357 11.6227 5.3357 10.445 5.3357 8.99653C5.3357 7.54809 6.53213 6.37036 8.00356 6.37036C9.47499 6.37036 10.6714 7.54809 10.6714 8.99653C10.6714 10.445 9.47142 11.6227 8.00356 11.6227ZM13.2321 4.79185C13.2321 5.31567 12.8036 5.73403 12.275 5.73403C11.7428 5.73403 11.3178 5.31216 11.3178 4.79185C11.3178 4.27153 11.7464 3.84966 12.275 3.84966C12.8036 3.84966 13.2321 4.27153 13.2321 4.79185ZM15.95 5.7481C15.8893 4.48599 15.5964 3.36802 14.6571 2.44692C13.7214 1.52583 12.5857 1.23755 11.3036 1.17427C9.98213 1.10044 6.02142 1.10044 4.69999 1.17427C3.42142 1.23403 2.28571 1.52231 1.34642 2.44341C0.407136 3.3645 0.11785 4.48247 0.0535644 5.74458C-0.0214355 7.04536 -0.0214355 10.9442 0.0535644 12.245C0.114279 13.5071 0.407136 14.625 1.34642 15.5461C2.28571 16.4672 3.41785 16.7555 4.69999 16.8188C6.02142 16.8926 9.98213 16.8926 11.3036 16.8188C12.5857 16.759 13.7214 16.4707 14.6571 15.5461C15.5928 14.625 15.8857 13.5071 15.95 12.245C16.025 10.9442 16.025 7.04888 15.95 5.7481ZM14.2428 13.6407C13.9643 14.3297 13.425 14.8606 12.7214 15.1383C11.6678 15.5497 9.16784 15.4547 8.00356 15.4547C6.83927 15.4547 4.3357 15.5461 3.28571 15.1383C2.58571 14.8641 2.04642 14.3333 1.76428 13.6407C1.34642 12.6036 1.44285 10.1426 1.44285 8.99653C1.44285 7.85044 1.34999 5.38599 1.76428 4.35239C2.04285 3.66333 2.58213 3.13247 3.28571 2.85474C4.33928 2.44341 6.83927 2.53833 8.00356 2.53833C9.16784 2.53833 11.6714 2.44692 12.7214 2.85474C13.4214 3.12895 13.9607 3.65981 14.2428 4.35239C14.6607 5.3895 14.5643 7.85044 14.5643 8.99653C14.5643 10.1426 14.6607 12.6071 14.2428 13.6407Z" fill={isDarkThemed ? "#FAF4E6" : "#0065FF"} />
            </g>
            <defs>
              <clipPath id="clip0_317_155">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </li>
    </>
  )
}

export default SocialIcons