function formatDate(date: Date): string {
  const now = new Date();

  const sameYear = date.getFullYear() === now.getFullYear();
  const sameMonth = date.getMonth() === now.getMonth();
  const sameDay = date.getDate() === now.getDate();
  const sameHour = date.getHours() === now.getHours();
  const sameMinute = date.getMinutes() === now.getMinutes();

  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  if (sameYear && sameMonth && sameDay && sameHour && sameMinute) {
    return "agora mesmo";
  }

  if (sameYear && sameMonth && sameDay && sameHour) {
    const diffMinutes = now.getMinutes() - date.getMinutes();
    return diffMinutes === 1
      ? "1 minuto atrás"
      : `${diffMinutes} minutos atrás`;
  }

  if (sameYear && sameMonth && sameDay) {
    const diffHours = now.getHours() - date.getHours();
    return diffHours === 1
      ? "1 hora atrás"
      : `${diffHours} horas atrás`;
  }

  if (sameYear && sameMonth) {
    const diffDays = now.getDate() - date.getDate();
    return diffDays === 1
      ? "Ontem"
      : `${diffDays} dias atrás`;
  }

  const yearDiff = now.getFullYear() - date.getFullYear();
  const monthDiff = now.getMonth() - date.getMonth() + yearDiff * 12;

  if (monthDiff < 12) {
    return monthDiff === 1
      ? "há 1 mês"
      : `há ${monthDiff} meses`;
  }

  if (yearDiff === 1) {
    return "há 1 ano";
  }

  if (yearDiff > 1) {
    return `há ${yearDiff} anos`;
  }

  return `${date.getDate()} de ${meses[date.getMonth()]} de ${date.getFullYear()}`;
}

export default formatDate;
