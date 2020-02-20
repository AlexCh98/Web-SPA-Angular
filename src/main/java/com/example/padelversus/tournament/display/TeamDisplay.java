package com.example.padelversus.tournament.display;

import java.util.List;

public class TeamDisplay {
    private String name;
    private int gamesWon;
    private int gamesPlayed;
    private int gamesLost;
    private boolean hasLastMatches;
    private List<String> lastMatches;

    public TeamDisplay(String name, int gamesWon, int gamesPlayed, int gamesLost, List<String> lastMatches, boolean hasLastMatches) {
        this.name = name;
        this.gamesWon = gamesWon;
        this.gamesPlayed = gamesPlayed;
        this.gamesLost = gamesLost;
        this.hasLastMatches = hasLastMatches;
        this.lastMatches = lastMatches;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getGamesWon() {
        return gamesWon;
    }

    public void setGamesWon(int gamesWon) {
        this.gamesWon = gamesWon;
    }

    public int getGamesPlayed() {
        return gamesPlayed;
    }

    public void setGamesPlayed(int gamesPlayed) {
        this.gamesPlayed = gamesPlayed;
    }

    public int getGamesLost() {
        return gamesLost;
    }

    public void setGamesLost(int gamesLost) {
        this.gamesLost = gamesLost;
    }

    public List<String> getLastMatches() {
        return lastMatches;
    }

    public void setLastMatches(List<String> lastMatches) {
        this.lastMatches = lastMatches;
    }

    public boolean isHasLastMatches() {
        return hasLastMatches;
    }

    public void setHasLastMatches(boolean hasLastMatches) {
        this.hasLastMatches = hasLastMatches;
    }
}
