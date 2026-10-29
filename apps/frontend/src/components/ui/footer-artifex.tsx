import { Mail, Phone, HelpCircle, Instagram, Youtube, Link2 } from 'lucide-react';
import { PostizAttribution } from '@gitroom/frontend/components/ui/postiz-attribution';

function TiktokIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
        </svg>
    );
}

const SUPPORT_URL = `https://wa.me/5581995245593?text=${encodeURIComponent(
    'Olá, preciso de suporte'
)}`;

const title = 'text-newTextColor font-[600] text-[15px] mb-[12px]';
const muted = 'text-textItemBlur';
const link =
    'text-textItemBlur hover:text-newTextColor transition-colors';
const socialBtn =
    'flex items-center justify-center w-[40px] h-[40px] rounded-[8px] bg-boxFocused text-textItemBlur hover:text-newTextColor transition-colors';

export function ArtifexFooter({ sourceCodeUrl }: { sourceCodeUrl?: string }) {
    return (
        <footer className="shrink-0 mt-[8px] rounded-[12px] bg-newBgColorInner text-left">
            <div className="px-[20px] mobile:px-[16px] py-[32px] mobile:py-[24px]">
                <div className="grid grid-cols-4 mobile:grid-cols-1 gap-[32px] mobile:gap-[24px]">
                    {/* Empresa */}
                    <div>
                        <h3 className={title}>Artifex Tech</h3>
                        <p className={`${muted} text-[14px] mb-[8px]`}>
                            Automatize suas redes sociais
                        </p>
                        <p className={`${muted} text-[12px] opacity-80`}>
                            CNPJ: 65.309.863/0001-90
                        </p>
                        <p className={`${muted} text-[12px] opacity-80 mt-[4px]`}>
                            R. A, 29 - Barra de Jangada
                            <br />
                            Jaboatão dos Guararapes - PE
                            <br />
                            CEP: 54470-580
                        </p>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className={title}>Contato</h3>
                        <div className="flex flex-col gap-[12px] text-[14px]">
                            <a
                                href="mailto:artifex@artifextech.com.br"
                                className={`flex items-center gap-[8px] break-all ${link}`}
                            >
                                <Mail className="w-[16px] h-[16px] shrink-0" />
                                artifex@artifextech.com.br
                            </a>
                            <a
                                href="https://wa.me/5581995245593"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-[8px] ${link}`}
                            >
                                <Phone className="w-[16px] h-[16px] shrink-0" />
                                (81) 99524-5593
                            </a>
                        </div>
                    </div>

                    {/* Suporte */}
                    <div>
                        <h3 className={title}>Suporte</h3>
                        <a
                            href={SUPPORT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-[8px] h-[40px] px-[16px] rounded-[8px] bg-[#612BD3] hover:bg-[#7236f1] text-white text-[14px] font-[600] transition-colors"
                        >
                            <HelpCircle className="w-[16px] h-[16px]" />
                            Abrir Suporte
                        </a>
                        <p className={`${muted} text-[12px] opacity-80 mt-[12px]`}>
                            Atendimento via WhatsApp
                        </p>
                    </div>

                    {/* Redes sociais */}
                    <div>
                        <h3 className={title}>Redes Sociais</h3>
                        <div className="flex items-center gap-[8px]">
                            <a
                                href="https://www.instagram.com/artifex.oficial/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={socialBtn}
                                title="Instagram"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-[18px] h-[18px]" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@artifex.oficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={socialBtn}
                                title="TikTok"
                                aria-label="TikTok"
                            >
                                <TiktokIcon className="w-[18px] h-[18px]" />
                            </a>
                            <a
                                href="https://www.youtube.com/@Artifex.oficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={socialBtn}
                                title="YouTube"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-[18px] h-[18px]" />
                            </a>
                        </div>
                        <a
                            href="https://linktree.artifextech.com.br"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-[12px] inline-flex items-center gap-[8px] h-[40px] px-[16px] rounded-[8px] bg-boxFocused text-textItemBlur hover:text-newTextColor text-[14px] font-[600] transition-colors"
                        >
                            <Link2 className="w-[16px] h-[16px]" />
                            Todos os links
                        </a>
                    </div>
                </div>

                {/* Rodapé legal */}
                <div className="mt-[32px] mobile:mt-[24px] pt-[20px] border-t border-blockSeparator flex flex-col items-center gap-[12px]">
                    <div className="flex flex-wrap items-center justify-center gap-x-[12px] gap-y-[8px] text-[13px]">
                        <a
                            href="https://control.artifextech.com.br/Privacidade"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${link} underline underline-offset-2`}
                        >
                            Política de Privacidade
                        </a>
                        <span className="text-blockSeparator mobile:hidden">|</span>
                        <a
                            href="https://control.artifextech.com.br/Termos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${link} underline underline-offset-2`}
                        >
                            Termos de Uso
                        </a>
                    </div>
                    <p className={`${muted} text-center text-[13px]`}>
                        © {new Date().getFullYear()} Artifex Tech. Todos os direitos
                        reservados.
                    </p>
                    <PostizAttribution sourceCodeUrl={sourceCodeUrl} />
                </div>
            </div>
        </footer>
    );
}