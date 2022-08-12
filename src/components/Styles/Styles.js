import styled from "styled-components";

export const Container = styled.div`
background: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.texto};
transition: all .6s ease;
p,a{
    color: ${({ theme }) => theme.texto};
    &:hover{
        color: ${({ theme }) => theme.paragrafoHover};
    }
}
input{
    color: rgb(0,0,0);
}
label{
    color: rgb(0,0,0);
}
h1, h2, h3, h4, h5{
    color: ${({ theme }) => theme.texto};
}

    
`
export const Nav = styled.nav`
transition: all .6s ease;
background-color: ${({ theme }) => theme.navBar};

ul, li, span, p{
    color: ${({ theme }) => theme.texto};
}
.dropdown-menu {
    background-color: ${({ theme }) => theme.navBarDrop};
    color: ${({ theme }) => theme.texto};
}
`
export const Card = styled.div`
transition: all .6s ease;
box-shadow: 0px 2px 6px 1px ${({ theme }) => theme.shadowCard}!important;
background: ${({ theme }) => theme.colorCardMentor}!important;
h2, h5, h4, h3, p{
    color: ${({ theme }) => theme.texto};
}
.text-card-modal{
    color: ${({ theme }) => theme.texto};
}
.bg-card-modal{
    background: ${({ theme }) => theme.colorCardMentor}!important;
}
input{
    color: rgb(0,0,0);
}
label{
    color: rgb(0,0,0);
}
.card-header{
    color: ${({ theme }) => theme.texto}
}
`

export const CardModal = styled.span`
transition: all .6s ease;
background: ${({ theme }) => theme.colorCardMentor}!important;
h2, h5, h4, h3, p{
    color: ${({ theme }) => theme.texto};
}
.text-card-modal{
    color: ${({ theme }) => theme.texto};
}
.bg-card-modal{
    background: ${({ theme }) => theme.colorCardMentor}!important;
}
.modal-title{
    color: ${({ theme }) => theme.texto};
}
input{
    color: rgb(0,0,0);
}
label{
    color: rgb(0,0,0);
}

`