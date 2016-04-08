package com.htcursos.controller;

import com.htcursos.entity.Cliente;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by Virmerson Bento dos Santos on 4/8/16.
 */

@RestController()
@RequestMapping(value = "/cliente")
public class ClienteController {

    List<Cliente> clienteList =new ArrayList<>();

    @RequestMapping(method = RequestMethod.GET, value = "/listar")
    @ResponseBody
    public List<Cliente> listar(HttpServletResponse response) {

        Cliente c1 =  new Cliente();
        c1.setNome("Jão");
        clienteList.add(c1);

        Cliente c2 =  new Cliente();
        c2.setNome("Ze");
        clienteList.add(c2);

        Cliente c3 =  new Cliente();
        c3.setNome("Maria");
        clienteList.add(c3);

        clienteList.add(c1);
        clienteList.add(c2);
        clienteList.add(c3);

        return  clienteList;
    }
}
