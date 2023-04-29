import React from "react";
import "./App.css";
// Styled Components를 저장한 파일의 전체를 임포트하고 별칭으로 S를 붙여서 호출함
import * as S from "./Style"

function App() {
  return (
    <S.StContainer>
      {/* 헤딩 영역 */}
      <S.StHeader>
        <h1>Enhanced To-do list</h1>
        <p>List and manage your 'To-dos'!</p>
      </S.StHeader>
      <S.StMain>
        {/* 사이드 바 영역 */}
        <S.StSidebar>
          <S.StCreateTodo>
            <h3>Do it!</h3>
            <ul>
              제목:
              <br />
              <input type="text" style={{ width: "95%" }} />
            </ul>
            <ul>
              내용:
              <br />
              <textarea rows="5" type="text" style={{ width: "95%" }} />
            </ul>
            <button>Submit</button>
          </S.StCreateTodo>
          <p> &nbsp;✓ 사이드 바에 콘텐츠 추가?</p>
        </S.StSidebar>
        {/* 출력 영역 */}
        <S.StOutputAera>
          {/* 진행 중인 작업 영역 */}
          <S.StTodosBox>
            <h3>Working...</h3>
            <S.StTodoCards>
              {/* 카드로 출력하는 영역 */}
              <S.StTodoCard>
                <h4>Title</h4>
                <p>Body</p>
                <button>Done</button>
                <button>Delete</button>
              </S.StTodoCard>
            </S.StTodoCards>
          </S.StTodosBox>
          {/* 완료한 작업 영역 */}
          <S.StTodosBox>
            <h3>Done!</h3>
            <S.StTodoCards>
              {/* 카드로 출력하는 영역 */}
              <S.StTodoCard>
                <h4>Title</h4>
                <p>Body</p>
                <button>Cancel</button>
                <button>Delete</button>
              </S.StTodoCard>
            </S.StTodoCards>
          </S.StTodosBox>
        </S.StOutputAera>
      </S.StMain>
      {/* 푸터 영역 */}
      <S.StFooter>Designed by Hira</S.StFooter>
    </S.StContainer>
  );
}

export default App;
