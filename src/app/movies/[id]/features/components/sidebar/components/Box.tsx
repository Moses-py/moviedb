export default function Box() {
  return (
    <div className="rounded-[20px] ring-1 hidden  ring-primary px-[30px] pt-[42px] pb-[16px] lg:flex flex-col gap-[10px]">
      <p className="text-[16px] font-[600]">
        Play movie quizzes and earn free tickets
      </p>
      <p className="text-[14px] font-[500]">50k people are now playing</p>
      <button className="rounded-[30px] px-[17px] py-[6px] text-primary text-[14px] font-[500] bg-primary/20 mt-[20px]">
        Start playing
      </button>
    </div>
  );
}
