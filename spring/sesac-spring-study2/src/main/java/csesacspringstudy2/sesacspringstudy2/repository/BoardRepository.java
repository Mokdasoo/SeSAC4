package csesacspringstudy2.sesacspringstudy2.repository;

import csesacspringstudy2.sesacspringstudy2.domain.Board;

import java.util.List;
import java.util.Optional;

public interface BoardRepository {
    Board save(Board board);
    Optional<Board> findById(int id);
    Optional<Board> findByName(String name);
    List<Board> findAll();
}
