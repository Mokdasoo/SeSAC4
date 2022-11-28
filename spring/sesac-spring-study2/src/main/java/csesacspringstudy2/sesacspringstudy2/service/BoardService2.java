package csesacspringstudy2.sesacspringstudy2.service;

import csesacspringstudy2.sesacspringstudy2.domain.Board;
import csesacspringstudy2.sesacspringstudy2.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardService2 {
    private final BoardRepository boardRepository;

    public int write(Board board){
        //이름 중복 검사
        memoryRepository.save(board);
        return board.getID();
    }

    public Optional<Board> findOneById(int id){
        return memoryRepository.findById(id);
    }
    public Optional<Board> findOneByName(String name){
        return memoryRepository.findByName(name);
    }

    public List<Board> findBoards(){
        return memoryRepository.findAll();
    }
}
