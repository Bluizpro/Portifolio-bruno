export interface Chat {
    id: number;
    mensagem: Message;
    pergunta: string;
}
export interface Message {
    mensagem: string;
    enviador: string;
    conteudo?: Number[];
    isPending?: boolean;
    numeroRespostas?: number | null;
}