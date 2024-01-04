import { recoleta, barlow } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const titleStyle = "text-3xl text-gray-800 font-medium mb-6 lg:text-4xl";
const subTitleStyle = "text-xl text-gray-800 font-medium mb-6 lg:text-2xl";
const textContainerStyle = "w-full flex flex-col gap-y-4 mb-12";
const textStyle = "text-base text-medium font-gray-800/90";

export const TermsContent = () => {
    return (
        <section className="w-full lg:bg-terms-background bg-no-repeat bg-right-bottom bg-[length:50%_100%]">
            <div className="w-full px-6 py-12 md:px-16 lg:container lg:mx-auto lg:py-24">
                <h3 className={cn(recoleta.className, titleStyle)}>1. Termos</h3>

                <div className={textContainerStyle}>
                    <p className={cn(barlow.className, textStyle)}>
                        Ao acessar ao site VetPet, concorda em cumprir estes termos de serviço,
                        todas as leis e regulamentos aplicáveis e concorda que é responsável pelo
                        cumprimento de todas as leis locais aplicáveis. Se você não concordar com
                        algum desses termos, está proibido de usar ou acessar este site. Os
                        materiais contidos neste site são protegidos pelas leis de direitos autorais
                        e marcas comerciais aplicáveis.
                    </p>
                </div>

                <h3 className={cn(recoleta.className, titleStyle)}>2. Uso de Licença</h3>

                <div className={textContainerStyle}>
                    <p className={cn(barlow.className, textStyle)}>
                        É concedida permissão para baixar temporariamente uma cópia dos materiais
                        (informações ou software) no site VetPet , apenas para visualização
                        transitória pessoal e não comercial. Esta é a concessão de uma licença, não
                        uma transferência de título e, sob esta licença, você não pode:
                    </p>

                    <ol className="list-decimal pl-4">
                        <li className={cn(barlow.className, textStyle)}>
                            modificar ou copiar os materiais;
                        </li>

                        <li className={cn(barlow.className, textStyle)}>
                            usar os materiais para qualquer finalidade comercial ou para exibição
                            pública (comercial ou não comercial);
                        </li>

                        <li className={cn(barlow.className, textStyle)}>
                            tentar descompilar ou fazer engenharia reversa de qualquer software
                            contido no site VetPet;
                        </li>

                        <li className={cn(barlow.className, textStyle)}>
                            remover quaisquer direitos autorais ou outras notações de propriedade
                            dos materiais; ou
                        </li>

                        <li className={cn(barlow.className, textStyle)}>
                            transferir os materiais para outra pessoa ou &apos;espelhe&apos; os
                            materiais em qualquer outro servidor.
                        </li>
                    </ol>

                    <p className={cn(barlow.className, textStyle)}>
                        Esta licença será automaticamente rescindida se você violar alguma dessas
                        restrições e poderá ser rescindida por VetPet a qualquer momento. Ao
                        encerrar a visualização desses materiais ou após o término desta licença,
                        você deve apagar todos os materiais baixados em sua posse, seja em formato
                        eletrônico ou impresso.
                    </p>
                </div>

                <h3 className={cn(recoleta.className, titleStyle)}>
                    3. Isenção de responsabilidade
                </h3>

                <div className={textContainerStyle}>
                    <ol className="list-decimal pl-4">
                        <li className={cn(barlow.className, textStyle)}>
                            Os materiais no site da VetPet são fornecidos ;&apos;como estão;&apos;.
                            VetPet não oferece garantias, expressas ou implícitas, e, por este meio,
                            isenta e nega todas as outras garantias, incluindo, sem limitação,
                            garantias implícitas ou condições de comercialização, adequação a um fim
                            específico ou não violação de propriedade intelectual ou outra violação
                            de direitos.
                        </li>

                        <li className={cn(barlow.className, textStyle)}>
                            Além disso, o VetPet não garante ou faz qualquer representação relativa
                            à precisão, aos resultados prováveis ou à confiabilidade do uso dos
                            materiais em seu site ou de outra forma relacionado a esses materiais ou
                            em sites vinculados a este site.
                        </li>
                    </ol>
                </div>

                <h3 className={cn(recoleta.className, titleStyle)}>4. Limitações</h3>

                <div className={textContainerStyle}>
                    <p className={cn(barlow.className, textStyle)}>
                        Em nenhum caso o VetPet ou seus fornecedores serão responsáveis por
                        quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro
                        ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade
                        de usar os materiais em VetPet, mesmo que VetPet ou um representante
                        autorizado da VetPet tenha sido notificado oralmente ou por escrito da
                        possibilidade de tais danos. Como algumas jurisdições não permitem
                        limitações em garantias implícitas, ou limitações de responsabilidade por
                        danos consequentes ou incidentais, essas limitações podem não se aplicar a
                        você.
                    </p>
                </div>

                <h3 className={cn(recoleta.className, titleStyle)}>5. Precisão dos materiais</h3>

                <div className={textContainerStyle}>
                    <p className={cn(barlow.className, textStyle)}>
                        Os materiais exibidos no site da VetPet podem incluir erros técnicos,
                        tipográficos ou fotográficos. VetPet não garante que qualquer material em
                        seu site seja preciso, completo ou atual. VetPet pode fazer alterações nos
                        materiais contidos em seu site a qualquer momento, sem aviso prévio. No
                        entanto, VetPet não se compromete a atualizar os materiais.
                    </p>
                </div>

                <h3 className={cn(recoleta.className, titleStyle)}>6. Links</h3>

                <div className={textContainerStyle}>
                    <p className={cn(barlow.className, textStyle)}>
                        O VetPet não analisou todos os sites vinculados ao seu site e não é
                        responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer
                        link não implica endosso por VetPet do site. O uso de qualquer site
                        vinculado é por conta e risco do usuário.
                    </p>
                </div>

                <h4 className={cn(recoleta.className, subTitleStyle)}>Modificações</h4>

                <div className={textContainerStyle}>
                    <p className={cn(barlow.className, textStyle)}>
                        O VetPet pode revisar estes termos de serviço do site a qualquer momento,
                        sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à
                        versão atual desses termos de serviço.
                    </p>
                </div>

                <h4 className={cn(recoleta.className, subTitleStyle)}>Lei aplicável</h4>

                <div className={textContainerStyle}>
                    <p className={cn(barlow.className, textStyle)}>
                        Estes termos e condições são regidos e interpretados de acordo com as leis
                        do VetPet e você se submete irrevogavelmente à jurisdição exclusiva dos
                        tribunais naquele estado ou localidade.
                    </p>
                </div>
            </div>
        </section>
    );
};
