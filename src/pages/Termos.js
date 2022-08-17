import { Navbar } from "../components/Navbar";

export const Termos = () => {
    return (
        <>
            <Navbar tipo={1} titulo={"Termos de Uso"}/>
            <div className="container p-5">
                <h2 className="mb-3 mt-3">1. Termos</h2>
                Ao acessar o site , concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.

                <h2 className="mb-3 mt-3"> 2. Uso de Licença</h2>
                É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:

                modificar ou copiar os materiais;
                usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);
                tentar descompilar ou fazer engenharia reversa de qualquer software contido no site ;
                remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou
                transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.
                Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.

                <h2 className="mb-3 mt-3">3. Isenção de responsabilidade</h2>
                Os materiais no site <strong>PANIC</strong> são fornecidos 'como estão'. não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                Além disso, o não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
                <h2 className="mb-3 mt-3"> 4. Limitações</h2>
                Em nenhum caso o ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em , mesmo que ou um representante autorizado da tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.

                <h2 className="mb-3 mt-3">5. Precisão dos materiais</h2>
                Os materiais exibidos no site da podem incluir erros técnicos, tipográficos ou fotográficos. não garante que qualquer material em seu site seja preciso, completo ou atual. pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, não se compromete a atualizar os materiais.

                <h2 className="mb-3 mt-3">6. Links</h2>
                O <strong>PANIC</strong> não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por do site. O uso de qualquer site vinculado é por conta e risco do usuário.

                Modificações
                O pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.

                Lei aplicável
                Estes termos e condições são regidos e interpretados de acordo com as leis do e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
            </div>
        </>
    );
}