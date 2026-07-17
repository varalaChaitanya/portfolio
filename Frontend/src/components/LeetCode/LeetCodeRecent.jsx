const LeetCodeRecent = ({
  submissions,
}) => {
  const accepted =
    submissions.filter(
      (item) =>
        item.statusDisplay === "Accepted"
    );

  return (
    <div className="mt-10">
      <h3
        className="
          mb-4

          text-xl

          font-bold
        "
      >
        Recent Accepted
      </h3>

      <div className="space-y-3">
        {accepted
          .slice(0, 3)
          .map((item) => (
            <div
              key={item.timestamp}
              className="
                flex

                items-center

                gap-3

                rounded-xl

                bg-slate-100

                p-3

                dark:bg-slate-800
              "
            >
              <span
                className="
                  text-green-500
                "
              >
                ✔
              </span>

              <span>
                {item.title}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeetCodeRecent;