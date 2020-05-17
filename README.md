# React Heroicons
> A set of free MIT-licensed high-quality SVG icons for you to use in your web projects.

This repository contains the [`heroicons`](https://github.com/refactoringui/heroicons) made by the team from [`refactoringui`](https://refactoringui.com/) as `React` components bundled in `esm` format.

## Previewing the Icons
Preview the icons at [heroicons.dev](https://heroicons.dev) (Made by [`codex-zaydek`](https://github.com/codex-zaydek)).

## Installation & Usage
First, install this library!
```
npm install --save @graywolfai/react-heroicons
```

Now you have access to the entire `heroicons` library! You use them like you would any `svg` component.
```tsx
import { Archive } from "@graywolfai/react-heroicons";
import { ArchiveOutline } from "@graywolfai/react-heroicons"; // or

export const SomeComponent = () => {
  return (
    ...
    <MdArchive className="h-6 w-6 text-gray-500"></MdArchive>
    <SmArchive className="h-6 w-6 text-gray-500"></SmArchive> // or
    ...
  )
}
```

> Note the above example assumes you are using [`Tailwind CSS`](https://tailwindcss.com/) but the color is easily stylable by using the CSS `color` property.

## Icons
```
.
↳ Adjustments
↳ AdjustmentsOutline
↳ Annotation
↳ AnnotationOutline
↳ Archive
↳ ArchiveOutline
↳ ArrowCircleDown
↳ ArrowCircleDownOutline
↳ ArrowCircleLeft
↳ ArrowCircleLeftOutline
↳ ArrowCircleRight
↳ ArrowCircleRightOutline
↳ ArrowCircleUp
↳ ArrowCircleUpOutline
↳ ArrowDown
↳ ArrowDownOutline
↳ ArrowLeft
↳ ArrowLeftOutline
↳ ArrowNarrowDown
↳ ArrowNarrowDownOutline
↳ ArrowNarrowLeft
↳ ArrowNarrowLeftOutline
↳ ArrowNarrowRight
↳ ArrowNarrowRightOutline
↳ ArrowNarrowUp
↳ ArrowNarrowUpOutline
↳ ArrowRight
↳ ArrowRightOutline
↳ ArrowUp
↳ ArrowUpOutline
↳ AtSymbol
↳ AtSymbolOutline
↳ BadgeCheck
↳ BadgeCheckOutline
↳ Ban
↳ BanOutline
↳ Bell
↳ BellOutline
↳ Bookmark
↳ BookmarkAlt
↳ BookmarkAltOutline
↳ BookmarkOutline
↳ BookOpen
↳ BookOpenOutline
↳ Briefcase
↳ BriefcaseOutline
↳ Calendar
↳ CalendarOutline
↳ Camera
↳ CameraOutline
↳ Cash
↳ CashOutline
↳ ChartBar
↳ ChartBarOutline
↳ ChartPie
↳ ChartPieOutline
↳ ChartSquareBar
↳ ChartSquareBarOutline
↳ Chat
↳ ChatAlt
↳ ChatAlt2
↳ ChatAlt2Outline
↳ ChatAltOutline
↳ ChatOutline
↳ Check
↳ CheckCircle
↳ CheckCircleOutline
↳ CheckOutline
↳ CheveronDown
↳ CheveronDownOutline
↳ CheveronLeft
↳ CheveronLeftOutline
↳ CheveronRight
↳ CheveronRightOutline
↳ CheveronUp
↳ CheveronUpOutline
↳ Clipboard
↳ ClipboardCheck
↳ ClipboardCheckOutline
↳ ClipboardCopy
↳ ClipboardCopyOutline
↳ ClipboardList
↳ ClipboardListOutline
↳ ClipboardOutline
↳ Clock
↳ ClockOutline
↳ CloudDownload
↳ CloudDownloadOutline
↳ CloudUpload
↳ CloudUploadOutline
↳ Code
↳ CodeOutline
↳ Cog
↳ CogOutline
↳ Collection
↳ CollectionOutline
↳ ColorSwatch
↳ ColorSwatchOutline
↳ CreditCard
↳ CreditCardOutline
↳ CurrencyDollar
↳ CurrencyDollarOutline
↳ CurrencyEuro
↳ CurrencyEuroOutline
↳ CurrencyPound
↳ CurrencyPoundOutline
↳ CurrencyRupee
↳ CurrencyRupeeOutline
↳ CurrencyYen
↳ CurrencyYenOutline
↳ CursorClick
↳ CursorClickOutline
↳ DesktopComputer
↳ DesktopComputerOutline
↳ Document
↳ DocumentAdd
↳ DocumentAddOutline
↳ DocumentDownload
↳ DocumentDownloadOutline
↳ DocumentDuplicate
↳ DocumentDuplicateOutline
↳ DocumentOutline
↳ DocumentRemove
↳ DocumentRemoveOutline
↳ DocumentReport
↳ DocumentReportOutline
↳ DotsCircleHorizontal
↳ DotsCircleHorizontalOutline
↳ DotsHorizontal
↳ DotsHorizontalOutline
↳ DotsVertical
↳ DotsVerticalOutline
↳ Download
↳ DownloadOutline
↳ Duplicate
↳ DuplicateOutline
↳ EmojiHappy
↳ EmojiHappyOutline
↳ EmojiSad
↳ EmojiSadOutline
↳ Exclamation
↳ ExclamationCircle
↳ ExclamationCircleOutline
↳ ExclamationOutline
↳ ExternalLink
↳ ExternalLinkOutline
↳ Eye
↳ EyeOff
↳ EyeOffOutline
↳ EyeOutline
↳ Filter
↳ FilterOutline
↳ Flag
↳ FlagOutline
↳ Folder
↳ FolderOutline
↳ Globe
↳ GlobeAlt
↳ GlobeAltOutline
↳ GlobeOutline
↳ Hashtag
↳ HashtagOutline
↳ Heart
↳ HeartOutline
↳ Home
↳ HomeOutline
↳ Inbox
↳ InboxIn
↳ InboxInOutline
↳ InboxOutline
↳ InformationCircle
↳ InformationCircleOutline
↳ Key
↳ KeyOutline
↳ Library
↳ LibraryOutline
↳ LightBulb
↳ LightBulbOutline
↳ LightningBolt
↳ LightningBoltOutline
↳ Link
↳ LinkOutline
↳ LocationMarker
↳ LocationMarkerOutline
↳ LockClosed
↳ LockClosedOutline
↳ LockOpen
↳ LockOpenOutline
↳ Logout
↳ LogoutOutline
↳ Mail
↳ MailOpen
↳ MailOpenOutline
↳ MailOutline
↳ Menu
↳ MenuAlt1
↳ MenuAlt1Outline
↳ MenuAlt2
↳ MenuAlt2Outline
↳ MenuAlt3
↳ MenuAlt3Outline
↳ MenuAlt4
↳ MenuAlt4Outline
↳ MenuOutline
↳ Microphone
↳ MicrophoneOutline
↳ MinusCircle
↳ MinusCircleOutline
↳ Moon
↳ MoonOutline
↳ Newspaper
↳ NewspaperOutline
↳ OfficeBuilding
↳ OfficeBuildingOutline
↳ PaperClip
↳ PaperClipOutline
↳ Pause
↳ PauseOutline
↳ Pencil
↳ PencilAlt
↳ PencilAltOutline
↳ PencilOutline
↳ Phone
↳ PhoneIncoming
↳ PhoneIncomingOutline
↳ PhoneOutgoing
↳ PhoneOutgoingOutline
↳ PhoneOutline
↳ Photograph
↳ PhotographOutline
↳ Play
↳ PlayOutline
↳ Plus
↳ PlusCircle
↳ PlusCircleOutline
↳ PlusOutline
↳ Printer
↳ PrinterOutline
↳ Qrcode
↳ QrcodeOutline
↳ QuestionMarkCircle
↳ QuestionMarkCircleOutline
↳ ReceiptRefund
↳ ReceiptRefundOutline
↳ Refresh
↳ RefreshOutline
↳ Reply
↳ ReplyOutline
↳ Scale
↳ ScaleOutline
↳ Search
↳ SearchOutline
↳ Selector
↳ SelectorOutline
↳ Share
↳ ShareOutline
↳ ShieldCheck
↳ ShieldCheckOutline
↳ ShieldExclamation
↳ ShieldExclamationOutline
↳ ShoppingCart
↳ ShoppingCartOutline
↳ SortAscending
↳ SortAscendingOutline
↳ SortDescending
↳ SortDescendingOutline
↳ Sparkles
↳ SparklesOutline
↳ Speakerphone
↳ SpeakerphoneOutline
↳ Star
↳ StarOutline
↳ Stop
↳ StopOutline
↳ Sun
↳ SunOutline
↳ Support
↳ SupportOutline
↳ SwitchHorizontal
↳ SwitchHorizontalOutline
↳ SwitchVertical
↳ SwitchVerticalOutline
↳ Tag
↳ TagOutline
↳ Template
↳ TemplateOutline
↳ Terminal
↳ TerminalOutline
↳ Ticket
↳ TicketOutline
↳ Translate
↳ TranslateOutline
↳ Trash
↳ TrashOutline
↳ TrendingDown
↳ TrendingDownOutline
↳ TrendingUp
↳ TrendingUpOutline
↳ Upload
↳ UploadOutline
↳ User
↳ UserAdd
↳ UserAddOutline
↳ UserCircle
↳ UserCircleOutline
↳ UserGroup
↳ UserGroupOutline
↳ UserOutline
↳ UserRemove
↳ UserRemoveOutline
↳ Users
↳ UsersOutline
↳ ViewBoards
↳ ViewBoardsOutline
↳ ViewGridAdd
↳ ViewGridAddOutline
↳ ViewList
↳ ViewListOutline
↳ VolumeOff
↳ VolumeOffOutline
↳ VolumeUp
↳ VolumeUpOutline
↳ X
↳ XCircle
↳ XCircleOutline
↳ XOutline
↳ ZoomIn
↳ ZoomInOutline
↳ ZoomOut
↳ ZoomOutOutline
```

## Publishing
```
# first generate the `tsx` files
npm run generate

# then bundle them into an ESM format
npm run bundle

# then tag (make sure to push the commit/tag to GitHub and create a release)
npm version major|minor|patch

# Then publish!
npm publish
```

## References
- This [article](http://nicolasgallagher.com/making-svg-icon-libraries-for-react-apps/) is a nice reference for creating `React` component libraries.
