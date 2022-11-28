package csesacspringstudy2.sesacspringstudy2.repository;

import csesacspringstudy2.sesacspringstudy2.domain.Board;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class JPARepository implements BoardRepository{
    private final EntityManager em;

    @Override
    public Board save(Board board) {
        this.em.persist(board);
        return board;
    }

    @Override
    public Optional<Board> findById(int id) {
        return Optional.empty();
    }

    @Override
    public Optional<Board> findByName(String name) {
        return Optional.empty();
    }

    @Override
    public List<Board> findAll() {
        return null;
    }
}
