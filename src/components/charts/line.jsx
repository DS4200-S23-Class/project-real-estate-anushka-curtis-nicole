export function LineChart({ min = 0, max = 100, value = 50, formatter = (a) => a }) {
  const range = Number(max) - Number(min);
  const offset = ((value - Number(min)) / range) * 100;

  const correctedOffset = offset > 100 ? 100 : offset;

  return (
    <div className="relative min-w-full py-1 group">
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="absolute w-0 h-2 bg-teal-600 rounded-full"
          style={{ width: `${correctedOffset}%` }}
        />
        <div
          className="absolute top-0 flex items-center justify-center w-4 h-4 -ml-2 bg-white border border-gray-300 rounded-full shadow"
          unselectable="on"
          style={{ left: `${correctedOffset}%` }}
        >
          <div className="relative w-1 -mt-2 opacity-10 group-hover:opacity-100">
            <div
              className="absolute left-0 z-40 min-w-full mb-2 opacity-100 bottom-100"
              style={{ marginLeft: '-20.5px' }}
            >
              <div className="relative shadow-md">
                <div className="px-4 py-1 -mt-8 text-xs text-white truncate bg-black rounded">
                  {formatter(value)}
                </div>
                <svg
                  className="absolute left-0 w-full h-2 text-black top-100"
                  x="0px"
                  y="0px"
                  viewBox="0 0 255 255"
                  xmlSpace="preserve"
                >
                  <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 -mb-6 -ml-1 text-gray-800">{formatter(min)}</div>
        <div className="absolute bottom-0 right-0 -mb-6 -mr-1 text-gray-800">{formatter(max)}</div>
      </div>
    </div>
  );
}
