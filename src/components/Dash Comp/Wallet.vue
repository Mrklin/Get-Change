<template lang="">
  <div
    class="bg-[#F6F8F8] w-full h-full flex flex-col justify-center items-center text-5xl p-10 px-25 gap-4"
  >
    <div class="w-full text-[#013C61] font-medium text-2xl">Wallet History</div>

    <div class="flex justify-between items-center px-6 w-full text-base">
      <p class="font-medium text-[#013C61]">All Transactions</p>
      <span class="flex justify-between items-center gap-3 font-light">
        <p class="border px-2">1</p>
        of 8
        <div
          class="rounded-full h-5 w-5 pb-0.5 flex items-center font-medium justify-center bg-[#2bda53] text-white cursor-pointer"
        >
          <
        </div>
        <div
          class="rounded-full h-5 w-5 pb-0.5 flex items-center font-medium justify-center bg-[#2bda53] text-white cursor-pointer"
        >
          >
        </div>
      </span>
    </div>

    <div class="w-full">
      <table class="border-separate border-spacing-y-2 w-full px-2">
        <!-- Table Header -->
        <thead class="[&_th]:text-[#013C61] font-normal">
          <tr>
            <th
              scope="col"
              class="px-4 py-4 text-left text-xs uppercase tracking-wider"
            >
              {{ theads.num }}
            </th>
            <th
              scope="col"
              class="px-4 py-4 text-left text-xs uppercase tracking-wider"
            >
              {{ theads.des }}
            </th>
            <th
              scope="col"
              class="px-4 py-4 text-left text-xs uppercase tracking-wider"
            >
              {{ theads.date }}
            </th>
            <th
              scope="col"
              class="px-4 py-4 text-left text-xs uppercase tracking-wider"
            >
              {{ theads.time }}
            </th>
            <th
              scope="col"
              class="px-4 py-4 text-right text-xs uppercase tracking-wider"
            >
              {{ theads.amount }}
            </th>
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody>
          <!-- Single Data Row -->
          <tr
            v-for="(tbody, index) in tableBodys"
            :key="index"
            class="hover:bg-indigo-50 [&_td]:text-gray-500 bg-white transition rounded-lg duration-150 my-4"
          >
            <td class="px-4 py-1.5 whitespace-nowrap text-sm rounded-l-sm">
              {{ tbody.num }}
            </td>
            <td class="px-4 py-1.5 whitespace-nowrap text-sm">
              {{ tbody.des }}
            </td>
            <td class="px-4 py-1.5 whitespace-nowrap text-sm">
              {{ tbody.date }}
            </td>
            <td class="px-4 py-1.5 whitespace-nowrap text-sm">
              {{ tbody.time }}
            </td>
            <td
              class="px-4 py-1.5 whitespace-nowrap text-sm text-right rounded-r-sm"
            >
              {{ tbody.amount }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      theads: {
        num: "#",
        des: "Description",
        date: "Date",
        time: "Time",
        staff: "Staff",
        amount: "Amount",
      },
      tableBodys: [
        {
          num: 1,
          des: "Wallet top up",
          date: "06 Aug, 2019",
          time: "12:24PM",
          staff: "Admin",
          amount: "NGN2000.00",
        },
        {
          num: 2,
          des: "Top for 081359491**",
          date: "06 Aug, 2019",
          time: "10:44AM",
          staff: "Jane",
          amount: "NGN55.00",
        },
        {
          num: 3,
          des: "Top for 080234578**",
          date: "06 Aug, 2019",
          time: "09:14AM",
          staff: "Hannah",
          amount: "NGN400.00",
        },
        {
          num: 4,
          des: "IOU for 081478491**",
          date: "05 Aug, 2019",
          time: "01:30PM",
          staff: "John",
          amount: "BRM***K",
        },
        {
          num: 5,
          des: "IOU for 081478491**",
          date: "05 Aug, 2019",
          time: "01:30PM",
          staff: "Admin",
          amount: "BRM***K",
        },
        {
          num: 6,
          des: "IOU for 081478491**",
          date: "05 Aug, 2019",
          time: "01:30PM",
          staff: "Admin",
          amount: "BRM***K",
        },
        {
          num: 7,
          des: "IOU for 081478491**",
          date: "05 Aug, 2019",
          time: "01:30PM",
          staff: "Admin",
          amount: "BRM***K",
        },
        {
          num: 8,
          des: "IOU for 081478491**",
          date: "05 Aug, 2019",
          time: "01:30PM",
          staff: "Admin",
          amount: "BRM***K",
        },
        // {num: 9, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 10, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 11, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 12, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 13, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 14, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 15, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 16, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 17, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 18, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 19, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 20, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 21, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 22, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 23, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" }
      ],
    };
  },
};
</script>
<style lang=""></style>
