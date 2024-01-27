// import React, { useState, Fragment, FC } from "react";
// import {
//   EuiSuperDatePicker,
//   EuiSwitch,
//   EuiSpacer,
//   EuiLink,
//   OnTimeChangeProps,
//   OnRefreshProps,
//   OnRefreshChangeProps,
// } from "@elastic/eui";

// interface MyCustomQuickSelectPanelProps {
//   applyTime: (time: { start: string; end: string }) => void;
// }

// const MyCustomQuickSelectPanel: FC<MyCustomQuickSelectPanelProps> = ({
//   applyTime,
// }) => {
//   const applyMyCustomTime = () => {
//     applyTime({ start: "now-30d", end: "now+7d" });
//   };

//   return (
//     <EuiLink onClick={applyMyCustomTime}>entire dataset timerange</EuiLink>
//   );
// };

// interface RecentlyUsedRange {
//   start: string;
//   end: string;
// }

// const App: FC = () => {
//   const [recentlyUsedRanges, setRecentlyUsedRanges] = useState<
//     RecentlyUsedRange[]
//   >([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [start, setStart] = useState("now-30m");
//   const [end, setEnd] = useState("now");
//   const [showCustomQuickSelectPanel, setShowCustomQuickSelectPanel] =
//     useState(true);
//   const [isPaused, setIsPaused] = useState(true);
//   const [refreshInterval, setRefreshInterval] = useState<number | undefined>(
//     undefined
//   );

//   const onTimeChange = ({ start, end }: OnTimeChangeProps) => {
//     const recentlyUsedRange = recentlyUsedRanges.filter((recentlyUsedRange) => {
//       const isDuplicate =
//         recentlyUsedRange.start === start && recentlyUsedRange.end === end;
//       return !isDuplicate;
//     });
//     recentlyUsedRange.unshift({ start, end });
//     setStart(start);
//     setEnd(end);
//     setRecentlyUsedRanges(
//       recentlyUsedRange.length > 10
//         ? recentlyUsedRange.slice(0, 9)
//         : recentlyUsedRange
//     );
//     setIsLoading(true);
//     startLoading();
//   };

//   const onRefresh = ({ start, end, refreshInterval }: OnRefreshProps) => {
//     return new Promise<void>((resolve) => {
//       setTimeout(resolve, 100);
//     }).then(() => {
//       console.log(start, end, refreshInterval);
//     });
//   };

//   const startLoading = () => {
//     setTimeout(stopLoading, 1000);
//   };

//   const stopLoading = () => {
//     setIsLoading(false);
//   };

//   const onRefreshChange = ({
//     isPaused,
//     refreshInterval,
//   }: OnRefreshChangeProps) => {
//     setIsPaused(isPaused);
//     setRefreshInterval(refreshInterval);
//   };

//   const toggleShowCustomQuickSelectPanel = () => {
//     setShowCustomQuickSelectPanel(!showCustomQuickSelectPanel);
//   };

//   const customQuickSelectPanels = showCustomQuickSelectPanel
//     ? [
//         {
//           title: "My custom panel",
//           content: (
//             <MyCustomQuickSelectPanel
//               applyTime={({ start, end }) => {
//                 setStart(start);
//                 setEnd(end);
//               }}
//             />
//           ),
//         },
//       ]
//     : undefined;

//   return (
//     <Fragment>
//       <EuiSwitch
//         label="Show custom quick menu panel"
//         onChange={toggleShowCustomQuickSelectPanel}
//         checked={showCustomQuickSelectPanel}
//       />
//       <EuiSpacer />
//       {/* <EuiSuperDatePicker
//         isLoading={isLoading}
//         start={start}
//         end={end}
//         onTimeChange={onTimeChange}
//         onRefresh={onRefresh}
//         isPaused={isPaused}
//         refreshInterval={refreshInterval}
//         onRefreshChange={onRefreshChange}
//         recentlyUsedRanges={recentlyUsedRanges}
//         customQuickSelectPanels={customQuickSelectPanels}
//       />
//       <EuiSpacer /> */}
//     </Fragment>
//   );
// };

// export default App;
