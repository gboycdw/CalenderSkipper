import { useState, useEffect } from "react";

export default function Timer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [today, setToday] = useState(DATE_LIST[0]);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < 5 || prevIndex >= DATE_LIST.length - 5) {
          return Math.min(prevIndex + 1, DATE_LIST.length - 1);
        } else {
          return Math.min(prevIndex + 1, DATE_LIST.length - 1);
        }
      });
    }, getInterval(currentIndex));

    return () => clearTimeout(intervalId);
  }, [currentIndex]);

  const getInterval = (index: number) => {
    const accelerationFactor = 2;
    const maxInterval = 500;
    const minInterval = 40;

    let interval = 0;

    if (index < 5 || index >= DATE_LIST.length - 4) {
      interval = maxInterval;
    } else if (index < 10 || index >= DATE_LIST.length - 9) {
      interval = maxInterval / 2;
    } else {
      const acceleration = Math.pow(accelerationFactor, index - 9);
      interval = maxInterval / acceleration;
    }

    return Math.max(interval, minInterval);
  };

  useEffect(() => {
    setToday(DATE_LIST[currentIndex]);
  }, [currentIndex]);

  return (
    <div className="bg-black text-white flex justify-center">
      <div className="flex justify-center items-center h-[750px]">
        <div
          className={`flex gap-1 font-[Digital] font-bold text-[95px] p-3 border rounded-full h-[530px] items-center`}
          style={{ borderRadius: "50%", boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
        >
          {today.split(" ").map((value: string, index: number) => {
            const specialStyle = "";
            return (
              <div className={`flex mx-1 ${specialStyle}`} key={`${index}${value}`}>
                <div>{value}</div>
                <a>.</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const DATE_LIST = [
  "2024 04 14",
  "2024 04 13",
  "2024 04 12",
  "2024 04 11",
  "2024 04 10",
  "2023 04 10",
  "2022 04 10",
  "2021 04 10",
  "2020 04 10",
  "2019 04 10",
  "2018 04 10",
  "2017 04 10",
  "2016 04 10",
  "2015 04 10",
  "2014 04 10",
  "2013 04 10",
  "2012 04 10",
  "2011 04 10",
  "2010 04 10",
  "2009 04 10",
  "2008 04 10",
  "2007 04 10",
  "2006 04 10",
  "2005 04 10",
  "2004 04 10",
  "2003 04 10",
  "2002 04 10",
  "2001 04 10",
  "2000 04 10",
  "1999 04 10",
  "1998 04 10",
  "1997 04 10",
  "1996 04 10",
  "1995 04 10",
  "1994 04 10",
  "1993 04 10",
  "1992 04 10",
  "1991 04 10",
  "1990 04 10",
  "1990 04 09",
  "1990 04 08",
];

// const DATE_LIST = [
//   "1990 04 08",
//   "1990 04 07",
//   "1990 04 06",
//   "1990 04 05",
//   "1990 04 04",
//   "1990 04 03",
//   "1990 04 02",
//   "1990 04 01",
//   "1990 03 31",
//   "1990 03 30",
//   "1990 03 29",
//   "1990 03 28",
//   "1990 03 27",
//   "1990 03 26",
//   "1990 03 25",
//   "1990 02 25",
//   "1990 01 25",
//   "1989 12 25",
//   "1989 12 24",
//   "1989 12 23",
//   "1989 12 22",
// ];
