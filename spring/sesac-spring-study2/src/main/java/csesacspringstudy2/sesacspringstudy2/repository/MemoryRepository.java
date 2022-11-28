package csesacspringstudy2.sesacspringstudy2.repository;

import csesacspringstudy2.sesacspringstudy2.domain.Board;

import java.util.*;

public class MemoryRepository implements BoardRepository{
    private static Map<Integer, Board> store = new HashMap<>();
    private static int id = 0;

    @Override
    public Board save(Board board) {
        //board 값은 이름과 내용이 적혀 왔다.
        //추가하는 코드
        board.setID(++id);
        store.put(board.getID(), board);
        return board;
    }

    @Override
    public Optional<Board> findById(int id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Optional<Board> findByName(String name) {
        return store.values().stream() // store에서 board 객체들(value)를 하나씩 찾아볼거다.
                .filter(board -> board.getName().equals(name)) // board의 이름이 내가 전달받은 이름과 같은
                .findAny(); // stream에서 가장 먼저 탐색되는 요소를 Optional로 감싸서 return
    }

    @Override
    public List<Board> findAll() {
        //찾는 코드
        ArrayList<Board> result = new ArrayList<>(store.values());
        return result;
    }
}
