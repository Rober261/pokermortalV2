package com.pokergame.poker.model;

import jakarta.persistence.*;
import java.io.*;


@Entity
public class User implements Serializable{
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  public Integer id;
  public String name;
  public String password;
  public float tokens;
  public boolean premium;
  
}
