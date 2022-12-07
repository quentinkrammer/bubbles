import { forwardRef } from "react";

interface PlayingFieldProps {}
const PlayingField = forwardRef<HTMLDivElement, PlayingFieldProps>(
  (PlayingFieldProps, ref) => {
    return (
      <div
        ref={ref}
        {...PlayingFieldProps}
        className="h-64 w-48 rounded-md border border-white"
      ></div>
    );
  }
);
export default PlayingField;
