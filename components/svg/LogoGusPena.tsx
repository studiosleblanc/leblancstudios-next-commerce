import React, { FC } from 'react'

interface LogoGusPenaProps {
  className?: string
}

const LogoGusPena: FC<LogoGusPenaProps> = props => {
  return (
    <svg
      width="255"
      height="65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M.772 63.472l9-23.739L.934 14.914h7.215l5.681 17.08 5.682-17.08h7.034l-8.91 23.74 9.09 24.818h-7.214l-5.862-17.17-5.862 17.17H.772zM54.377 36.601v-6.569h12.878v22.3c0 7.828-3.878 11.68-11.706 11.68h-2.706c-7.828 0-11.705-3.87-11.705-11.68v-40.64c0-7.829 3.878-11.68 11.705-11.68h2.706c7.756 0 11.525 3.87 11.525 11.5v8.64H60.04v-8.82c0-3.24-1.533-4.77-4.78-4.77h-2.164c-3.247 0-4.78 1.53-4.78 4.77v41.36c0 3.239 1.533 4.769 4.78 4.769h2.345c3.246 0 4.78-1.53 4.78-4.77v-16.09h-5.844zM97.178 63.472h-6.854v-3.15c-1.984 1.89-4.6 3.69-8.64 3.69-5.681 0-8.296-3.24-8.296-8.711V14.93h6.853v38.93c0 2.52 1.173 3.69 3.518 3.69 2.164 0 4.148-.72 6.583-2.43V14.93h6.854v48.54h-.018zM119.418 24.74c0-2.789-1.353-4.139-4.149-4.139h-1.172c-2.796 0-4.149 1.35-4.149 4.14v4.23c0 2.16.631 3.419 2.525 4.589l8.099 5.04c3.968 2.519 5.682 4.768 5.682 9.61v4.86c0 7.288-3.698 10.96-10.985 10.96h-1.353c-7.214 0-10.804-3.69-10.804-10.78v-7.2h6.764v7.65c0 2.789 1.353 4.139 4.149 4.139h1.352c2.796 0 4.149-1.35 4.149-4.14v-4.59c0-2.069-.722-3.419-2.525-4.589l-8.099-5.039c-3.878-2.52-5.682-4.77-5.682-9.61v-4.5c0-7.29 3.698-10.96 10.985-10.96h1.172c7.215 0 10.804 3.689 10.804 10.78v6.839h-6.763v-7.29zM150.405 63.472h-7.215V.552h12.427c7.846 0 11.706 3.87 11.706 11.68v15.91c0 7.83-3.878 11.68-11.706 11.68h-5.23v23.65h.018zm4.96-56.351h-4.96v26.15h4.96c3.246 0 4.779-1.53 4.779-4.769v-16.63c0-3.221-1.533-4.751-4.779-4.751zM179.516 41.73v11.591c0 2.88 1.443 4.32 4.329 4.32h1.262c2.886 0 4.329-1.44 4.329-4.32v-5.579h6.674v5.31c0 7.288-3.698 10.96-10.985 10.96h-1.443c-7.305 0-10.984-3.69-10.984-10.96V25.37c0-7.29 3.697-10.96 10.984-10.96h1.443c7.305 0 10.985 3.689 10.985 10.96v16.36h-16.594zm0-6.478h9.722V25.1c0-2.88-1.443-4.32-4.329-4.32h-1.082c-2.886 0-4.329 1.44-4.329 4.32v10.15h.018zM202.026 14.931h6.854v3.15c1.984-1.89 4.599-3.69 8.639-3.69 5.682 0 8.297 3.24 8.297 8.73v40.368h-6.854V24.56c0-2.52-1.172-3.69-3.517-3.69-2.164 0-4.148.72-6.583 2.43v40.19h-6.854V14.93h.018zm7.034-13.48c1.894 0 2.796.36 4.509 1.62l2.165 1.62c.992.72 1.352 1.08 1.893 1.08h.091c.721 0 .811-.36.811-1.08V1.45h4.6v5.22c0 2.7-1.443 4.229-4.149 4.229h-.18c-1.894 0-2.796-.36-4.509-1.62l-2.165-1.62c-.992-.72-1.352-1.08-1.894-1.08h-.09c-.721 0-.811.36-.811 1.08v3.24h-4.6V5.68c0-2.699 1.443-4.229 4.149-4.229h.18zM231.769 46.572c0-6.03 1.984-8.46 7.214-10.241l9.181-3.15v-8.099c0-2.88-1.443-4.41-4.329-4.41h-.541c-2.886 0-4.329 1.53-4.329 4.41v6.03h-6.673v-5.76c0-7.289 3.697-10.96 10.984-10.96h.722c7.305 0 10.984 3.69 10.984 10.96v38.12h-6.854v-3.06c-1.894 1.8-4.419 3.6-8.387 3.6-5.501 0-8.009-3.15-8.009-8.55v-8.89h.037zm16.395 8.728V39.48l-6.223 2.16c-2.525.99-3.336 2.25-3.336 5.04v7.379c0 2.34 1.172 3.51 3.336 3.51 2.075-.019 3.968-.739 6.223-2.269z"
        fill="#010101"
      />
    </svg>
  )
}

export default LogoGusPena