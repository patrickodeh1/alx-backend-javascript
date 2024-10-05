export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const res = mathFunction();
    queue.push(res);
    queue.push('Guardrail was processed');
  } catch (error) {
    queue.push(`Error: ${error.message}`);
    queue.push('Guardrail was processed');
  }
  return queue;
}
