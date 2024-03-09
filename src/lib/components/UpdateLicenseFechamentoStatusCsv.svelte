<!-- ImportCSV.svelte -->
<script lang="ts">
    import type { UpdateLicenseFechamentoStatus } from '$lib/objects/License';
  import Papa from 'papaparse';

  export let submitOnLoad: (licenses: UpdateLicenseFechamentoStatus[]) => void;
  
  let parsedData: any | null = null;

  const handleFileUpload = async (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        // Processa os dados CSV usando o papaparse
        Papa.parse(reader.result, {
          complete: (result: any) => {
            console.log('result data', result.data);
            parsedData = result.data;
          },
          header: true, // Se o arquivo CSV tiver cabeçalho
        });
        // formata o parsedData para o formato correto do objeto a ser enviado.
        let licenses: Array<object> = [];
        parsedData?.forEach((row: any) => {
          const newRow = alterarChaves(row);
          licenses.push({
            licenseId: newRow.licenseid,
            fechamentoStatus: newRow.fechamentostatus
          })
        })

        submitOnLoad(licenses as UpdateLicenseFechamentoStatus[]);
      };

      reader.readAsText(file);
    }
  };

  function alterarChaves(objeto: Record<string, string>): Record<string, string> {
    const novoObjeto: Record<string, string> = {};

    for (const chave in objeto) {
      if (objeto.hasOwnProperty(chave)) {
        // Modifica a chave conforme sua lógica
        const novaChave: string = chave.replace(/\s+/g, '').toLowerCase();
        novoObjeto[novaChave] = objeto[chave];
      }
    }

    return novoObjeto;
  }
</script>

<main>
  <label for="upload-csv"
    class="border p-1 m-2 bg-[#2B8262] text-white bold rounded-md"
  >
    Atualizar Status de fechamento das licenças
  </label>
  <input type="file" id="upload-csv" accept=".csv" on:change={handleFileUpload} class="hidden"/>
</main>
