package csesacspringstudy2.sesacspringstudy2.controller;

import csesacspringstudy2.sesacspringstudy2.domain.Board;
import csesacspringstudy2.sesacspringstudy2.dto.BoardDTO;
import csesacspringstudy2.sesacspringstudy2.service.BoardService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Optional;

@Controller
public class BoardController {
    private static BoardService boardService = new BoardService();

    @GetMapping("board-write")
    public String getBoardWrite(){ return "board-write"; }
    @PostMapping("board-write")
    public String postBoardWrite(BoardDTO boardDTO) {
        //boardDTO = { name: d, content: d }
        Board board = new Board();
        board.setName(boardDTO.getName());
        board.setContent(boardDTO.getContent());
        boardService.write(board);
        return "redirect:/board-view";
    }
    @GetMapping("board-view")
    public String getBoardView(Model model){
        model.addAttribute("list", boardService.findBoards());
        return "board-view";
    }
    @PostMapping("board-search")
    @ResponseBody
    public Optional<Board> postBoardSearch(@RequestBody BoardDTO boardDTO){
        return boardService.findOneByName(boardDTO.getName());
    }
}
