package com.example.padelversus.Player;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public  interface PlayerRepository extends JpaRepository<Player,Long> {
    public Optional<Player> findById(Long id);
    public Optional<Player> findAllBy(String name);

}