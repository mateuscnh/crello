import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Container = styled.footer`
    position: absolute;
    top: -40px;
    right: 20px;
    width: 100%;
    height: 40px;
    text-align: center;
    margin-top: 50px;

    p{
        font-size: 14px;
    }

    .social{
        margin-top: 4px;
        a{
            color:#fff;
            margin: 10px;
            transition: .2s;
            :hover{
                opacity: .5;
            }
        }

    }
`;

export default function () {
    return (
        <Container>
            <div className="social">
                <a href="https://github.com/mateuscnh/crello" rel="noopener noreferrer" target="_blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/mateuscnh" rel="noopener noreferrer" target="_blank"><FaLinkedinIn /></a>
                <a href="https://www.instagram.com/mateuscnh" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
            </div>
        </Container>
    );
}
