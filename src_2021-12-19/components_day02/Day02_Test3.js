import React from "react";

// 개발자 도구의 console 창이 아닌 Components 로 확인하자~!!!
const Day02_Test3 = () => {
  // 함수영역
  const handleClick1 = () => {
    alert("테스트1");
  };

  const handleClick2 = () => {
    alert("테스트2");
  };

  const handleClick3 = () => {
    alert("테스트3");
  };

  //   const make1 = (e) => {
  //     alert(e.target.value);
  //   };
  const make1 = (num) => {
    alert(num);
  };

  const make2 = (num) => {
    alert(num);
  };

  return (
    <div>
      <h2>이벤트 처리법</h2>
      <p>
        <button onClick={handleClick1}>클릭</button>
        <button onClick={handleClick2}>클릭</button>
        <button onClick={handleClick3}>클릭</button>
      </p>

      <p>
        <button
          onClick={() => {
            alert("테스트4");
          }}
        >
          클릭
        </button>
        <button
          onClick={() => {
            alert("연습입니다.");
            console.log("test5");
          }}
        >
          클릭
        </button>
        <button onClick={() => alert("tssssss")}>클릭</button>
      </p>

      <p>
        {/* <button onClick={make1(100)}> 값 전달</button> */}
        {/* <button onClick={make2(200)}> 값 전달</button> */}

        {/* 값전달 방식 : 이벤트 = { () => props명(값) } */}
        <button onClick={make1}> 값 전달</button>
        <button onClick={() => make2(200)}> 값 전달</button>
      </p>
    </div>
  );
};

export default Day02_Test3;
