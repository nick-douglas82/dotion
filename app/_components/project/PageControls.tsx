import {
  ChatBubbleBottomCenterTextIcon,
  FaceSmileIcon,
  PhotoIcon,
} from '@heroicons/react/24/solid'

export const PageControls = () => {
  const actionButtons = [
    {
      icon: <FaceSmileIcon className="h-4 w-4" />,
      text: 'Add Icon',
    },
    {
      icon: <PhotoIcon className="h-4 w-4" />,
      text: 'Add Cover',
    },
    {
      icon: <ChatBubbleBottomCenterTextIcon className="h-4 w-4" />,
      text: 'Add Comment',
    },
  ]

  return (
    <nav className="mb-4 text-gray-400 opacity-0 hover:opacity-100">
      <ul className="-ml-3 flex items-center gap-x-3 text-sm">
        {actionButtons.map((actionButton, index) => (
          <li key={index} className="rounded-sm hover:bg-gray-100">
            <button className="flex items-center gap-x-1 px-3 py-1">
              {actionButton.icon}
              {actionButton.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
