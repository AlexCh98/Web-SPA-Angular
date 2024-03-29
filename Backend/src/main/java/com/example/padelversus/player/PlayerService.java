package com.example.padelversus.player;

import com.example.padelversus.ImageService;
import com.example.padelversus.team.Team;
import com.example.padelversus.team.TeamRepository;
import com.example.padelversus.tournament.Tournament;
import com.example.padelversus.tournament.TournamentRepository;
import com.example.padelversus.user.User;
import com.example.padelversus.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PlayerService {
    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private TournamentRepository tournamentRepository;

    @Autowired
    private ImageService imageService;

    public Optional<Player> findPlayerById(Long id) {
        Optional<Player> player = playerRepository.findById(id);
        return player;
    }

    public void savePlayer(Player player) {
        playerRepository.save(player);
    }
    public Optional<Player> findPlayerByName(String name){
        Optional<Player> player = playerRepository.findByUserName(name);
        return player;
    }
    //Save (a copy) of a player joined with the user passed in username param if not possible return null
    public boolean savePlayer(Player player, String username, MultipartFile imagenFile) throws IOException {
        Optional<User> relatedUser = userRepository.findByName(username);
        if (relatedUser.isPresent()) {
            Player playerSave = new Player();

            byte[] image = imagenFile.getBytes();

            playerSave.setAge(player.getAge());
            playerSave.setImage(player.getImage());
            playerSave.setCountryBirth(player.getCountryBirth());
            playerSave.setHeight(player.getHeight());
            playerSave.setWeight(player.getWeight());
            playerSave.setSpeed(player.getSpeed());
            playerSave.setStrength(player.getStrength());
            playerSave.setEndurance(player.getEndurance());
            playerSave.setPace(player.getPace());
            playerSave.setAccuaracy(player.getAccuaracy());
            playerSave.setAceleration(player.getAceleration());

            playerSave.setImage(image);

            playerSave.setUser(relatedUser.get());
            playerRepository.save(playerSave);
            return true;
        }
        return false;
    }

    //find the name of the team  of the player


    //find the name of more the team  of each player
    public List<Team> findTeamsOfPlayer(Player player) {
        return teamRepository.findTeamByPlayerId(player.getId());
    }


    public List<Tournament> findTournamentsOfPlayer(Player player) {

        List<Team> teamsOfPlayer1 = findTeamsOfPlayer(player);
        List<Tournament> tournamentsFound = new ArrayList<>();
        for (Team team : teamsOfPlayer1) {
            List<Tournament> tournamentsOfTeam = tournamentRepository.findTournamentByTeamId(team.getId());
            tournamentsFound.addAll(tournamentsOfTeam);
        }
        return tournamentsFound;
    }


    // Return the string temporal path were the image is saved (return null if there is any problem)
    public String getImagePath(Player player) {
        byte[] byteImage = player.getImage();
        BufferedImage imageFile;
        try {
            imageFile = ImageIO.read(new ByteArrayInputStream(byteImage));
        } catch (IOException e) {
            return null;
        }
        String path;
        try {
            path = imageService.saveImage("Player", player.getId(), imageFile);
        } catch (IOException e) {
            return null;
        }
        return path;
    }

    // Only for demo purpose (assign File to byte[])
    public boolean setImagePlayer(Player player, File imageFile) {
        BufferedImage bImage;
        try {
            bImage = ImageIO.read(imageFile);
        } catch (IOException e) {
            return false;
        }
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        try {
            ImageIO.write(bImage, "jpg", bos);
        } catch (IOException e) {
            return false;
        }
        byte[] data = bos.toByteArray();
        player.setImage(data);
        return true;
    }

    // Returns the player asociate at an user or null if not returns null
    public Player getPlayerFromUser(User user) {
        return playerRepository.findByUser(user).orElse(null);
    }

    public Player getPlayerFromUsername(String username) {
        return playerRepository.findByUserName(username).orElse(null);
    }

    public List<Player> findAllPlayer() {
        List<Player> players = playerRepository.findAll();
        return players;
    }
}
