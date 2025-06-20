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
    if (diffMinutes === 1) {
      return `${diffMinutes} minuto atrás`;
    } else {
      return `${diffMinutes} minutos atrás`;
    }
  }

  if (sameYear && sameMonth && sameDay) {
    const diffHours = now.getHours() - date.getHours();
    if (diffHours === 1) {
      return `${diffHours} hora atrás`;
    } else {
      return `${diffHours} horas atrás`;
    }
  }

  if (sameYear && sameMonth) {
    const diffDays = now.getDate() - date.getDate();
    if (diffDays === 1) {
      return `Ontem`;
    } else {
      return `${diffDays} dias atrás`;
    }
  }

  if (sameYear) {
    return `${date.getDate()} de ${meses[date.getMonth()]}`;
  }

  return `${date.getDate()} de ${meses[date.getMonth()]} de ${date.getFullYear()}`;
}

export default formatDate;