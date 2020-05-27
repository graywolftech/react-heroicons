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

Now you have access to the entire `heroicons` library! They are formatted as [pascal case](https://techterms.com/definition/pascalcase) and have either nothing (solid format) or `Outline` (outline format) appended at the end. You use them like you would any `svg` component.
```tsx
import { Archive } from "@graywolfai/react-heroicons";
import { ArchiveOutline } from "@graywolfai/react-heroicons"; // or

export const SomeComponent = () => {
  return (
    ...
    <Archive className="h-6 w-6 text-gray-500"></Archive>
    <ArchiveOutline className="h-6 w-6 text-gray-500"></ArchiveOutline> // or
    ...
  )
}
```

> Note the above example assumes you are using [`Tailwind CSS`](https://tailwindcss.com/) but the color is easily stylable by using the CSS `color` property.

## Icons
```
.
↳ AdjustmentsOutline
↳ AdjustmentsSolid
↳ AnnotationOutline
↳ AnnotationSolid
↳ ArchiveOutline
↳ ArchiveSolid
↳ ArrowCircleDownOutline
↳ ArrowCircleDownSolid
↳ ArrowCircleLeftOutline
↳ ArrowCircleLeftSolid
↳ ArrowCircleRightOutline
↳ ArrowCircleRightSolid
↳ ArrowCircleUpOutline
↳ ArrowCircleUpSolid
↳ ArrowDownOutline
↳ ArrowDownSolid
↳ ArrowLeftOutline
↳ ArrowLeftSolid
↳ ArrowNarrowDownOutline
↳ ArrowNarrowDownSolid
↳ ArrowNarrowLeftOutline
↳ ArrowNarrowLeftSolid
↳ ArrowNarrowRightOutline
↳ ArrowNarrowRightSolid
↳ ArrowNarrowUpOutline
↳ ArrowNarrowUpSolid
↳ ArrowRightOutline
↳ ArrowRightSolid
↳ ArrowsExpandOutline
↳ ArrowsExpandSolid
↳ ArrowUpOutline
↳ ArrowUpSolid
↳ AtSymbolOutline
↳ AtSymbolSolid
↳ BadgeCheckOutline
↳ BadgeCheckSolid
↳ BanOutline
↳ BanSolid
↳ BellOutline
↳ BellSolid
↳ BookmarkAltOutline
↳ BookmarkAltSolid
↳ BookmarkOutline
↳ BookmarkSolid
↳ BookOpenOutline
↳ BookOpenSolid
↳ BriefcaseOutline
↳ BriefcaseSolid
↳ CalendarOutline
↳ CalendarSolid
↳ CameraOutline
↳ CameraSolid
↳ CashOutline
↳ CashSolid
↳ ChartBarOutline
↳ ChartBarSolid
↳ ChartPieOutline
↳ ChartPieSolid
↳ ChartSquareBarOutline
↳ ChartSquareBarSolid
↳ ChatAlt2Outline
↳ ChatAlt2Solid
↳ ChatAltOutline
↳ ChatAltSolid
↳ ChatOutline
↳ ChatSolid
↳ CheckCircleOutline
↳ CheckCircleSolid
↳ CheckOutline
↳ CheckSolid
↳ ChevronDownOutline
↳ ChevronDownSolid
↳ ChevronLeftOutline
↳ ChevronLeftSolid
↳ ChevronRightOutline
↳ ChevronRightSolid
↳ ChevronUpOutline
↳ ChevronUpSolid
↳ ClipboardCheckOutline
↳ ClipboardCheckSolid
↳ ClipboardCopyOutline
↳ ClipboardCopySolid
↳ ClipboardListOutline
↳ ClipboardListSolid
↳ ClipboardOutline
↳ ClipboardSolid
↳ ClockOutline
↳ ClockSolid
↳ CloudDownloadOutline
↳ CloudDownloadSolid
↳ CloudUploadOutline
↳ CloudUploadSolid
↳ CodeOutline
↳ CodeSolid
↳ CogOutline
↳ CogSolid
↳ CollectionOutline
↳ CollectionSolid
↳ ColorSwatchOutline
↳ ColorSwatchSolid
↳ CreditCardOutline
↳ CreditCardSolid
↳ CurrencyDollarOutline
↳ CurrencyDollarSolid
↳ CurrencyEuroOutline
↳ CurrencyEuroSolid
↳ CurrencyPoundOutline
↳ CurrencyPoundSolid
↳ CurrencyRupeeOutline
↳ CurrencyRupeeSolid
↳ CurrencyYenOutline
↳ CurrencyYenSolid
↳ CursorClickOutline
↳ CursorClickSolid
↳ DesktopComputerOutline
↳ DesktopComputerSolid
↳ DocumentAddOutline
↳ DocumentAddSolid
↳ DocumentDownloadOutline
↳ DocumentDownloadSolid
↳ DocumentDuplicateOutline
↳ DocumentDuplicateSolid
↳ DocumentOutline
↳ DocumentRemoveOutline
↳ DocumentRemoveSolid
↳ DocumentReportOutline
↳ DocumentReportSolid
↳ DocumentSolid
↳ DotsCircleHorizontalOutline
↳ DotsCircleHorizontalSolid
↳ DotsHorizontalOutline
↳ DotsHorizontalSolid
↳ DotsVerticalOutline
↳ DotsVerticalSolid
↳ DownloadOutline
↳ DownloadSolid
↳ DuplicateOutline
↳ DuplicateSolid
↳ EmojiHappyOutline
↳ EmojiHappySolid
↳ EmojiSadOutline
↳ EmojiSadSolid
↳ ExclamationCircleOutline
↳ ExclamationCircleSolid
↳ ExclamationOutline
↳ ExclamationSolid
↳ ExternalLinkOutline
↳ ExternalLinkSolid
↳ EyeOffOutline
↳ EyeOffSolid
↳ EyeOutline
↳ EyeSolid
↳ FilterOutline
↳ FilterSolid
↳ FireOutline
↳ FireSolid
↳ FlagOutline
↳ FlagSolid
↳ FolderAddOutline
↳ FolderAddSolid
↳ FolderDownloadOutline
↳ FolderDownloadSolid
↳ FolderOutline
↳ FolderRemoveOutline
↳ FolderRemoveSolid
↳ FolderSolid
↳ GlobeAltOutline
↳ GlobeAltSolid
↳ GlobeOutline
↳ GlobeSolid
↳ HandOutline
↳ HandSolid
↳ HashtagOutline
↳ HashtagSolid
↳ HeartOutline
↳ HeartSolid
↳ HomeOutline
↳ HomeSolid
↳ InboxInOutline
↳ InboxInSolid
↳ InboxOutline
↳ InboxSolid
↳ InformationCircleOutline
↳ InformationCircleSolid
↳ KeyOutline
↳ KeySolid
↳ LibraryOutline
↳ LibrarySolid
↳ LightBulbOutline
↳ LightBulbSolid
↳ LightningBoltOutline
↳ LightningBoltSolid
↳ LinkOutline
↳ LinkSolid
↳ LocationMarkerOutline
↳ LocationMarkerSolid
↳ LockClosedOutline
↳ LockClosedSolid
↳ LockOpenOutline
↳ LockOpenSolid
↳ LogoutOutline
↳ LogoutSolid
↳ MailOpenOutline
↳ MailOpenSolid
↳ MailOutline
↳ MailSolid
↳ MenuAlt1Outline
↳ MenuAlt1Solid
↳ MenuAlt2Outline
↳ MenuAlt2Solid
↳ MenuAlt3Outline
↳ MenuAlt3Solid
↳ MenuAlt4Outline
↳ MenuAlt4Solid
↳ MenuOutline
↳ MenuSolid
↳ MicrophoneOutline
↳ MicrophoneSolid
↳ MinusCircleOutline
↳ MinusCircleSolid
↳ MoonOutline
↳ MoonSolid
↳ NewspaperOutline
↳ NewspaperSolid
↳ OfficeBuildingOutline
↳ OfficeBuildingSolid
↳ PaperClipOutline
↳ PaperClipSolid
↳ PauseOutline
↳ PauseSolid
↳ PencilAltOutline
↳ PencilAltSolid
↳ PencilOutline
↳ PencilSolid
↳ PhoneIncomingOutline
↳ PhoneIncomingSolid
↳ PhoneOutgoingOutline
↳ PhoneOutgoingSolid
↳ PhoneOutline
↳ PhoneSolid
↳ PhotographOutline
↳ PhotographSolid
↳ PlayOutline
↳ PlaySolid
↳ PlusCircleOutline
↳ PlusCircleSolid
↳ PlusOutline
↳ PlusSolid
↳ PrinterOutline
↳ PrinterSolid
↳ PuzzleOutline
↳ PuzzleSolid
↳ QrcodeOutline
↳ QrcodeSolid
↳ QuestionMarkCircleOutline
↳ QuestionMarkCircleSolid
↳ ReceiptRefundOutline
↳ ReceiptRefundSolid
↳ RefreshOutline
↳ RefreshSolid
↳ ReplyOutline
↳ ReplySolid
↳ ScaleOutline
↳ ScaleSolid
↳ SearchOutline
↳ SearchSolid
↳ SelectorOutline
↳ SelectorSolid
↳ ShareOutline
↳ ShareSolid
↳ ShieldCheckOutline
↳ ShieldCheckSolid
↳ ShieldExclamationOutline
↳ ShieldExclamationSolid
↳ ShoppingBagOutline
↳ ShoppingBagSolid
↳ ShoppingCartOutline
↳ ShoppingCartSolid
↳ SortAscendingOutline
↳ SortAscendingSolid
↳ SortDescendingOutline
↳ SortDescendingSolid
↳ SparklesOutline
↳ SparklesSolid
↳ SpeakerphoneOutline
↳ SpeakerphoneSolid
↳ StarOutline
↳ StarSolid
↳ StopOutline
↳ StopSolid
↳ SunOutline
↳ SunSolid
↳ SupportOutline
↳ SupportSolid
↳ SwitchHorizontalOutline
↳ SwitchHorizontalSolid
↳ SwitchVerticalOutline
↳ SwitchVerticalSolid
↳ TagOutline
↳ TagSolid
↳ TemplateOutline
↳ TemplateSolid
↳ TerminalOutline
↳ TerminalSolid
↳ ThumbDownOutline
↳ ThumbDownSolid
↳ ThumbUpOutline
↳ ThumbUpSolid
↳ TicketOutline
↳ TicketSolid
↳ TranslateOutline
↳ TranslateSolid
↳ TrashOutline
↳ TrashSolid
↳ TrendingDownOutline
↳ TrendingDownSolid
↳ TrendingUpOutline
↳ TrendingUpSolid
↳ UploadOutline
↳ UploadSolid
↳ UserAddOutline
↳ UserAddSolid
↳ UserCircleOutline
↳ UserCircleSolid
↳ UserGroupOutline
↳ UserGroupSolid
↳ UserOutline
↳ UserRemoveOutline
↳ UserRemoveSolid
↳ UserSolid
↳ UsersOutline
↳ UsersSolid
↳ ViewBoardsOutline
↳ ViewBoardsSolid
↳ ViewGridAddOutline
↳ ViewGridAddSolid
↳ ViewGridOutline
↳ ViewGridSolid
↳ ViewListOutline
↳ ViewListSolid
↳ VolumeOffOutline
↳ VolumeOffSolid
↳ VolumeUpOutline
↳ VolumeUpSolid
↳ XCircleOutline
↳ XCircleSolid
↳ XOutline
↳ XSolid
↳ ZoomInOutline
↳ ZoomInSolid
↳ ZoomOutOutline
↳ ZoomOutSolid
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
