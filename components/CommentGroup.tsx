export function CommentGroup() {
  return (
    <div className="flex w-2/3 flex-col items-center justify-center justify-items-center">
      <div />

      <textarea
        id="message"
        rows={4}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50
               p-2.5 text-sm text-gray-900 focus:border-blue-500
                focus:ring-blue-500 dark:border-gray-600
                 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400
                 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Comment..."
      />
    </div>
  );
}
