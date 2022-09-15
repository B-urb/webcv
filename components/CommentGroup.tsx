



export function CommentGroup() {
  return <div className="hidden flex flex-col w-2/3 items-center justify-center justify-items-center">
    <div></div>


    <textarea id="message" rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50
               rounded-lg border border-gray-300 focus:ring-blue-500
                focus:border-blue-500 dark:bg-gray-700
                 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Comment..."></textarea>
  </div>;
}